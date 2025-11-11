import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  function loadContentsquareScript() {
    if (initialized) return;
    setInitialized(true);

    const script = document.createElement('script');
    script.src = `https://t.contentsquare.net/uxa/82bae2a3f7f6b.js`;
    script.async = true;
    document.head.appendChild(script);

    document.removeEventListener('scroll', loadContentsquareScript);
  }
  function handleWaClick(tag) {
          fetch('/api/whatsapp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                          "T": tag,
                          "PARAMS": Object.fromEntries(new URLSearchParams(window.location.search).entries()),
                          p: window.location.pathname
                  }),
          });
  }
  useEffect(() => {
    fetch("/api/page", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        PARAMS: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
        p: window.location.pathname
      }),
    })

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

  return <>{children}</>;
};

export default Layout;
