/**
 * SmoothScroll
 *
 * Zero dependency smooth scroll component.
 * Nicher case gula automatic vabe handle kore:
 *
 * [1] Desktop browser (normal mode)
 *     → wheel intercept + lerp smooth scroll
 *
 * [2] Mobile browser (normal mode)
 *     → native scroll, kichu override kore na
 *
 * [3] Mobile browser → Desktop mode (UA spoof)
 *     → pointer: coarse check kore real touch device dhore
 *     → native scroll dey, desktop lerp calu hoy na
 *
 * [4] Battery Saver / Low Power Mode (mobile & desktop)
 *     → requestAnimationFrame throttle hoye jai (fps kome)
 *     → live fps monitor kore lerp auto-adjust hoy
 *     → fps < 40 hole smooth off kore native scroll dey
 *
 * [5] High refresh rate display (90hz / 120hz / 144hz)
 *     → live fps theke lerp factor ber kore
 *     → beshi hz = beshi smooth (small lerp)
 *     → kom hz = kom smooth (big lerp, snappy feel)
 *
 * [6] Battery saver OFF → ON or display hz change
 *     → visibilitychange + focus event e re-detect kore
 *     → page chere fire ashle notu kore calibrate hoy
 *
 * [7] Window resize (landscape ↔ portrait, or desktop mode toggle)
 *     → resize e device type re-check hoy
 *     → mobile hole smooth off, desktop hole on
 *
 * Usage  : main.jsx e <SmoothScroll> diye <App /> wrap koro
 * Install: kono npm package lagbe na
 */

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const currentY   = useRef(0);
  const targetY    = useRef(0);
  const rafRef     = useRef(null);
  const lerpRef    = useRef(0.1);
  const activeRef  = useRef(false);
  const cleanupRef = useRef(null);

  useEffect(() => {
    // Utility: real touch device kina check
    // Mobile browser → Desktop mode korleo pointer: coarse thake
    function isTouchDevice() {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0
      );
    }

    // Utility: live fps measure kora (~300ms sample)
    function measureFps() {
      return new Promise((resolve) => {
        let frames = 0;
        let start  = null;
        function count(ts) {
          if (!start) start = ts;
          frames++;
          if (ts - start < 300) {
            requestAnimationFrame(count);
          } else {
            resolve(Math.round((frames / (ts - start)) * 1000));
          }
        }
        requestAnimationFrame(count);
      });
    }

    // fps theke lerp factor ber kora
    function lerpFromFps(fps) {
      if (fps >= 110) return 0.06; // 120hz
      if (fps >= 80)  return 0.08; // 90hz
      if (fps >= 50)  return 0.10; // 60hz
      return null;                 // fps < 40 → battery saver, smooth off
    }

    // Smooth scroll on kora
    function startSmooth(lerp) {
      if (activeRef.current) return;
      activeRef.current  = true;
      currentY.current   = window.scrollY;
      targetY.current    = window.scrollY;
      lerpRef.current    = lerp;

      function onWheel(e) {
        e.preventDefault();
        targetY.current += e.deltaY;
        const maxScroll   = document.body.scrollHeight - window.innerHeight;
        targetY.current   = Math.max(0, Math.min(targetY.current, maxScroll));
      }

      window.addEventListener("wheel", onWheel, { passive: false });

      function animate() {
        currentY.current += (targetY.current - currentY.current) * lerpRef.current;
        if (Math.abs(currentY.current - targetY.current) < 0.5) {
          currentY.current = targetY.current;
        }
        window.scrollTo(0, currentY.current);
        rafRef.current = requestAnimationFrame(animate);
      }
      rafRef.current = requestAnimationFrame(animate);

      // cleanup function save kora
      cleanupRef.current = () => {
        window.removeEventListener("wheel", onWheel);
        cancelAnimationFrame(rafRef.current);
        activeRef.current = false;
      };
    }

    // Smooth scroll off kora
    function stopSmooth() {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    }

    // Main calibration: sob case ekhane decide hoy
    async function calibrate() {
      stopSmooth();

      // Case [2] [3]: touch device hole native scroll
      if (isTouchDevice()) return;

      // Case [4] [5]: fps measure kora
      const fps  = await measureFps();
      const lerp = lerpFromFps(fps);

      // Case [4]: battery saver ba khub kom fps → smooth off
      if (!lerp) return;

      // Case [1] [5]: desktop, valo fps → smooth on
      startSmooth(lerp);
    }

    // Case [6]: battery saver toggle, display hz change
    function onVisibilityChange() {
      if (document.visibilityState === "visible") calibrate();
    }
    function onFocus() { calibrate(); }

    // Case [7]: desktop mode toggle, orientation change
    function onResize() { calibrate(); }

    // Events register kora
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("focus",  onFocus);
    window.addEventListener("resize", onResize);

    // Prothombar chalু kora
    calibrate();

    return () => {
      stopSmooth();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("focus",  onFocus);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <>{children}</>;
}
