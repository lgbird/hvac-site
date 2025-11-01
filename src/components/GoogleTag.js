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

    document.addEventListener('scroll', loadGoogleTag);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('scroll', loadGoogleTag);
    };
  }, []);

  return null; // This component does not render any visible DOM elements
}
