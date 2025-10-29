import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import PhoneSvg from '../components/PhoneSvg.js';
import WhatsappSvg from '../components/WhatsappSvg.js';

const PageTemplate = ({ pageContext }) => (
  <main>
    <Navbar home={false} />
    <section class="hero" style={{ position: 'relative', overflow: 'hidden' }}>
    <StaticImage
      src="../images/background_hq.webp"
      alt="Hero Background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
      loading="eager"
      fetchpriority="high"
    />
        <div class="hero-content">
            <h1 class="hero-title">{pageContext.header}</h1>
            <p class="hero-subtitle">{pageContext.subheader}</p>
            <button class="cta-button">
              <PhoneSvg />
              <span>Ligue-nos já</span>
            </button>
        </div>
    </section>
    <ReviewsSection />
    <Footer />
  </main>
);

export default PageTemplate;

export const Head = () => (
  <SEO title="Climatização Algarve"/>
)
