import React from "react";

import Layout from '../components/Layout.js';
import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ContactSection from '../components/ContactSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import GoogleTag from '../components/GoogleTag.js';

const PageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <main>
        <Navbar home={false} />
        <HeroSection header={pageContext.header} subheader={pageContext.subheader} />
        <SpeedAlertSection />
        <WhyUs />
        <ImageRow />
        <Services />
        <StaticImage src="../images/wm-repair.png" className="only-mobile" />
        <BrandsSection />
        <ReviewsSection />
        <ResponsiveRow />
        <ContactSection />
        <ReviewsSection />
        <Footer />
        <GoogleTag />
        <FixedBottomCta />
      </main>
    </Layout>
  );
}

export default PageTemplate;

export const Head = () => (
  <SEO />
)
