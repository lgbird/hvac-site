import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { useSiteConfigHook } from "../hooks/siteConfigHook.js";
import { SiteContext } from "../components/SiteContext.js";

import SEO from '../components/Seo.js';
import Layout from '../components/Layout.js';
import NavbarLanding from '../components/NavbarLanding.js';
import HeroSection from '../components/HeroSection.js';
import SpeedAlertSection from "../components/SpeedAlertSection.js";
import BelowFoldSection from "../components/BelowFoldSection.js";
import ServicesSection from "../components/ServicesSection.js";
import BrandsSection from "../components/BrandsSection.js";
import ReviewsSection from '../components/ReviewsSection.js';
import ContactSection from '../components/ContactSection.js';
import Footer from '../components/Footer.js';
import ContactInfoSection from "../components/ContactInfoSection.js";


const ImageRow = () => {
  return (
    <div class="img-row">
      <StaticImage src="../images/wm-guy.png" />
      <StaticImage src="../images/wm-repair.png" className="only-desktop" />
    </div>
  )
}

const ServiceArea = () => {
  return (
    <section id="area-servico" class="section">
      <div class="img-section-container">
        <h2 class="section-title">Area de Serviço</h2>
        <StaticImage src="../images/area-servico.png" style={{ marginBottom: "2rem" }} imgClassName="service-area-img" className="service-area-img" />
        <p class="section-subtitle">Vamos até si em toda Grande Lisboa!</p>
      </div>
    </section>
  )
}


const ResponsiveRow = () => {
  return (
    <section class="responsive-row">
      <ServiceArea />
      <ContactInfoSection />
    </section>
  )
}

const PageTemplate = ({ pageContext }) => {
  const { phoneNumber, formattedNumber, waMessage } = useSiteConfigHook();
  let waLink = `https://api.whatsapp.com/send/?phone=351${phoneNumber}&text=${encodeURIComponent(waMessage)}`;
  return (
    <SiteContext.Provider value={{ waLink, formattedNumber, phoneNumber }}>
      <Layout>
        <main>
          <NavbarLanding />
          <HeroSection header={pageContext.header} subheader={pageContext.subheader} campaignTag={pageContext.campaignTag} />
          <ReviewsSection />
          <SpeedAlertSection />
          <BelowFoldSection />
          <ImageRow />
          <ServicesSection />
          <StaticImage src="../images/wm-repair.png" className="only-mobile" />
          <BrandsSection />
          <ResponsiveRow />
          <ContactSection />
          <Footer />
        </main>
      </Layout>
    </SiteContext.Provider>
  )
}

export default PageTemplate;

export const Head = () => (
  <SEO />
)
