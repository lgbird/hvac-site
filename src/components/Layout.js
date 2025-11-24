import React, { useEffect, useState } from "react";
import Clarity from '@microsoft/clarity';

import WhatsAppBtn from '../components/whatsappBtn.js';
import { SiteContext } from "./SiteContext.js";
import { useSiteConfigHook } from "../hooks/siteConfigHook.js";

const Layout = ({ children }) => {
  const { clarityTag, googleTag, googleConversionAction } = useSiteConfigHook();
  const { waLink, formattedNumber } = React.useContext(SiteContext);
  function loadGoogleTag() {
    if (window.googleTagLoaded) return;
    window.googleTagLoaded = true;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTag}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', googleTag);
    //gtag('config', GOOGLE_ANALYTICS_TAG_ID);

    document.removeEventListener('scroll', loadGoogleTag);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        Clarity.init(clarityTag);
      } catch (e) {
        console.log(e);
      }
    }, 100); // delay in ms
    try {
      fetch("/api/page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          PARAMS: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
          p: window.location.pathname,
          ref: document.referrer
        }),
      })
    } catch (e) {
      console.log(e)
    }

    function handleCtaClick(e) {
      let tag = e.currentTarget.dataset.btn;

      try {
        fetch('/api/whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "T": tag,
            "PARAMS": Object.fromEntries(new URLSearchParams(window.location.search).entries()),
            p: window.location.pathname,
            ref: document.referrer
          }),
        });
      } catch (e) {
        console.log(e)
      }

      const maxWaitTime = 5000; // max wait time in ms
      const intervalTime = 100; // check every 100ms
      let waited = 0;

      function trySendConversion() {
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': `${googleTag}/${googleConversionAction}`
          });
        } else if (waited < maxWaitTime) {
          waited += intervalTime;
          setTimeout(trySendConversion, intervalTime);
        } else {
          console.warn('gtag not loaded in time, conversion event not sent');
        }
      }

      trySendConversion();
    }

    const ctaElements = document.querySelectorAll('.cta');
    for (const el of ctaElements) {
      el.addEventListener('click', handleCtaClick);
    }
    // Load Google Tag Manager script on scroll
    document.addEventListener('scroll', loadGoogleTag);
    document.addEventListener('click', loadGoogleTag);

    return () => {
      document.removeEventListener('scroll', loadGoogleTag);
      document.removeEventListener('click', loadGoogleTag);
      for (const el of ctaElements) {
        el.removeEventListener('click', handleCtaClick);
      }
      clearTimeout(timer);
    };
  }, []);

  return (

    <>
      {children}
      <WhatsAppBtn waLink={waLink} formattedNumber={formattedNumber} />
    </>
  )
};

export default Layout;
