import React, { useState, useEffect } from "react";

const COOKIE_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handlePolicyClick = () => {
    // TODO: navigate to cookie policy page
    console.log("Navigate to cookie policy");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-3 z-50 w-[calc(100%-24px)] bg-head rounded p-4 shadow-lg sm:w-[300px] sm:bottom-6 sm:right-6 sm:p-6">
      
      {/* Description */}
      <p className="texts_14_regular text-white/90 mb-4 sm:mb-5">
        In order to provide you a personalized shopping experience, our site
        uses cookies. By continuing to use this site, you agree to our{" "}
        <button
          onClick={handlePolicyClick}
          className="underline underline-offset-2 hover:text-white/70 transition-colors"
        >
          cookie policy
        </button>.
      </p>

      {/* Accept Button */}
      <button
        onClick={handleAccept}
        className="w-full bg-second/30 hover:bg-second/50 transition-colors rounded py-3 sm:py-[14px] text-white font-semibold tracking-[2px] uppercase"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;