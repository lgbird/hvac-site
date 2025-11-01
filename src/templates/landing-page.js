import React from "react";

import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import GoogleTag from '../components/GoogleTag.js';

const PageTemplate = ({ pageContext }) => (
  <main>
    <Navbar home={false} />
    <HeroSection header={pageContext.header} subheader={pageContext.subheader} />
    <ReviewsSection />
    <Footer />
    <GoogleTag />
  </main>
);

export default PageTemplate;

export const Head = () => (
  <SEO title="ClimAlgarve"/>
)
