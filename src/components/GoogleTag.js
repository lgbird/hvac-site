// src/components/GoogleTagManager.js
import * as React from "react";
import { Script } from "gatsby";

const GOOGLE_TAG_ID = "AW-17670662770"; // Replace with your GTM ID

export default function GoogleTagManager() {
  return (
    <>
      {/* Load the GTM script asynchronously and defer execution */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_ID}`}
      />

      {/* Initialize dataLayer and gtag config asynchronously */}
      <Script id="gtm-inline-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}

