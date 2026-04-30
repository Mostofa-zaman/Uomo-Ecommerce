import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import Countdown from "@/component/layouts/home/Countdown";
import Feature from "@/component/layouts/home/Feature";
import LimitedEdition from "@/component/layouts/home/LimitedEdition";
import Products from "@/component/layouts/home/Products";
import Support from "@/component/layouts/home/Support";
import Uomo from "@/component/layouts/home/Uomo";
import React, { lazy, Suspense, useEffect, useState } from "react";

const NewsletterPopup = lazy(
  () => import("@/component/common/Newsletterpopup"),
);
const CookieConsent = lazy(() => import("@/component/common/CookieConsent "));

const Home = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const newsletterTimer = setTimeout(() => {
      setShowNewsletter(true);
    }, 3000);
    const cookieTimer = setTimeout(() => {
      setShowCookie(true);
    }, 10000);

    return () => {
      clearTimeout(newsletterTimer);
      clearTimeout(cookieTimer);
    };
  }, []);
  return (
    <>
      {showNewsletter && (
        <Suspense fallback={null}>
          <NewsletterPopup />
        </Suspense>
      )}
      {showCookie && (
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
      )}
      <Banner />
      <Collection />
      <Products />
      <Countdown />
      <Feature />
      <LimitedEdition />
      <Uomo />
      <Support />
    </>
  );
};

export default Home;
