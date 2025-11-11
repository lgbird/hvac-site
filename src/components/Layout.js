import React, { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    fetch("/api/page", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        PARAMS: Object.fromEntries(new URLSearchParams(window.location.search).entries())
      }),
    })
    function handleWaClick(tag) {
            fetch('/api/whatsapp', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                            "T": tag,
                            "PARAMS": Object.fromEntries(new URLSearchParams(window.location.search).entries())
                    }),
            });
    }

    const ctaElement = document.querySelector('.cta-float');
    ctaElement.addEventListener('click', () => handleWaClick('float'));
    const ctaElements = document.querySelectorAll('.cta-btn');
    for (const el of ctaElements) {
        el.addEventListener('click', () => handleWaClick('main'));
    }

    return () => {
        ctaElement.removeEventListener('click', () => handleWaClick('float'));
        for (const el of ctaElements) {
            el.removeEventListener('click', () => handleWaClick('main'));
        }
    };
  }, []);

  return <>{children}</>;
};

export default Layout;
