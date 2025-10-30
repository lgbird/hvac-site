import React from "react";

import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';

const PageTemplate = ({ pageContext }) => (
  <main>
    <Navbar home={false} />
    <HeroSection header={pageContext.header} subheader={pageContext.subheader} />
    <ReviewsSection />
    <Footer />
  </main>
);

export default PageTemplate;

export const Head = () => (
  <SEO title="ClimAlgarve"/>
)
