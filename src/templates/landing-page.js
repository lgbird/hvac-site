import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ContactSection from '../components/ContactSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import GoogleTag from '../components/GoogleTag.js';

const PageTemplate = ({ pageContext }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
              description
              siteUrl
              heroHeader
              heroSubheader
              serviceArea
            }
          }
        }
      `)
    const pageData = data.site.siteMetadata;
  return (
    <main>
      <Navbar home={false} siteName={pageData.title}/>
      <HeroSection header={pageContext.header} subheader={pageContext.subheader} />
      <ContactSection />
      <ReviewsSection />
      <Footer />
      <GoogleTag />
    </main>
  );
}

export default PageTemplate;

export const Head = () => (
  <SEO />
)
