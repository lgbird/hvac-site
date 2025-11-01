import React, { useEffect } from 'react';
import { Script } from "gatsby";

const GOOGLE_TAG_ID = "AW-17670662770"; // Replace with your GTM ID

export default function GoogleTagManager() {
  useEffect(() => {
    function loadGoogleTag() {
      if (window.googleTagLoaded) return;
      window.googleTagLoaded = true;

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GOOGLE_TAG_ID);

      document.removeEventListener('scroll', loadGoogleTag);
    }

function handleClickConversion() {
  const maxWaitTime = 5000; // max wait time in ms
  const intervalTime = 100; // check every 100ms
  let waited = 0;

  function trySendConversion() {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${GOOGLE_TAG_ID}/mgPPCPevy7cbEPLUg-pB`
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


    // Load Google Tag Manager script on scroll
    document.addEventListener('scroll', loadGoogleTag);
    document.addEventListener('click', loadGoogleTag);

    const ctaElements = document.querySelectorAll('.cta');
    ctaElements.forEach((element) => {
      element.addEventListener('click', handleClickConversion);
    });

    return () => {
      document.removeEventListener('scroll', loadGoogleTag);
      document.removeEventListener('click', loadGoogleTag);
      ctaElements.forEach((element) => {
        element.removeEventListener('click', handleClickConversion);
      });
    };
  }, []);

  return null; // This component does not render any visible DOM elements
}
