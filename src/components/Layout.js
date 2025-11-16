import React, { useEffect, useState } from "react";

import WhatsAppBtn from '../components/whatsappBtn.js';
import GoogleTag from '../components/GoogleTag.js';
import { SiteContext } from "./SiteContext.js";

const CONTENTSQUARE_TAG = process.env.GATSBY_CONTENTSQUARE_TAG;

const Layout = ({ children }) => {
  const { waLink, formattedNumber } = React.useContext(SiteContext);
  const [initialized, setInitialized] = useState(false);
  function loadContentsquareScript() {
    if (initialized) return;
    setInitialized(true);

    const script = document.createElement('script');
    script.src = `https://t.contentsquare.net/uxa/${CONTENTSQUARE_TAG}.js`;
    script.async = true;
    document.head.appendChild(script);

    document.removeEventListener('scroll', loadContentsquareScript);
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
    const blocked = [
      'AdsBot-Google (+http://www.google.com/adsbot.html)',
      'GoogleOther'
    ];
    if (!blocked.includes(window.navigator.userAgent) && window.location.host !== "localhost:8000") {
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
    }

    const ctaElement = document.querySelector('.cta-float');
    ctaElement.addEventListener('click', () => handleWaClick('float'));
    const ctaElements = document.querySelectorAll('.cta-btn');
    for (const el of ctaElements) {
      el.addEventListener('click', () => handleWaClick('main'));
    }
    document.addEventListener('scroll', loadContentsquareScript);
    document.addEventListener('click', loadContentsquareScript);

    return () => {
      document.removeEventListener('scroll', loadContentsquareScript);
      document.removeEventListener('click', loadContentsquareScript);
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
    </>
  )
};

export default Layout;
