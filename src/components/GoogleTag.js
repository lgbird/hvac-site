// src/components/GoogleTagManager.js
import * as React from "react";
import { Script } from "gatsby";

const GOOGLE_TAG_ID = "AW-17670662770"; // Replace with your GTM ID

export default function GoogleTagManager() {
  return (
<script>
    function loadGoogleTag() {
      // Prevent loading multiple times
      if (window.googleTagLoaded) return;
      window.googleTagLoaded = true;

      // Dynamically create the Google Tag script element
      var script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`; // Replace with your ID
      script.async = true;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag after loading script
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GOOGLE_TAG_ID); // Replace with your ID

      // Remove the scroll event listener after loading
      document.removeEventListener('scroll', loadGoogleTag);
    }
    document.addEventListener('scroll', loadGoogleTag);
  </script>
  );
}

