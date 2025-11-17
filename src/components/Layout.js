import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

import WhatsAppBtn from '../components/whatsappBtn.js';
import GoogleTag from '../components/GoogleTag.js';
import { SiteContext } from "./SiteContext.js";

const Layout = ({ children }) => {
  const { waLink, formattedNumber } = React.useContext(SiteContext);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    console.log("EFFECT")
    if (consent) {
      window.clarity('set', 'consent', true); // if using direct code
      console.log("CONSENT")
      // or dynamically load clarity script here if not loaded yet
    }
  }, [consent]);
  const [initialized, setInitialized] = useState(false);
  function loadClarity() {
    if (initialized) return;
    setInitialized(true);

    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "u76pysinte");

    document.removeEventListener('scroll', loadClarity);
    document.removeEventListener('click', loadClarity);
  }
  function handleWaClick(tag) {
    try {
      fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "T": tag,
          "PARAMS": Object.fromEntries(new URLSearchParams(window.location.search).entries()),
          p: window.location.pathname
        }),
      });
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    try {
      fetch("/api/page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          PARAMS: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
          p: window.location.pathname
        }),
      })
    } catch (e) {
      console.log(e)
    }

    const ctaElement = document.querySelector('.cta-float');
    ctaElement.addEventListener('click', () => handleWaClick('float'));
    const ctaElements = document.querySelectorAll('.cta-btn');
    for (const el of ctaElements) {
      el.addEventListener('click', () => handleWaClick('main'));
    }
    //document.addEventListener('scroll', loadClarity);
    //document.addEventListener('click', loadClarity);

    return () => {
      //document.removeEventListener('scroll', loadClarity);
      //document.removeEventListener('click', loadClarity);
      ctaElement.removeEventListener('click', () => handleWaClick('float'));
      for (const el of ctaElements) {
        el.removeEventListener('click', () => handleWaClick('main'));
      }
    };
  }, []);

  return (
    <>
      {children}
      <WhatsAppBtn waLink={waLink} formattedNumber={formattedNumber} />
      <GoogleTag />
      <CookieConsent
        onAccept={() => setConsent(true)}
        cookieName="gatsby-gdpr-google-analytics"
        enableDeclineButton
      >
        This website uses cookies to improve user experience.
      </CookieConsent>
    </>
  )
};

export default Layout;
