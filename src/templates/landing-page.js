import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useSiteConfigHook } from "../hooks/siteConfigHook.js";
import { SiteContext } from "../components/SiteContext.js";
import SEO from '../components/Seo.js';
import Layout from '../components/Layout.js';

import { BelowFoldSection, BrandsSection, ContactInfoSection, ContactSection, HeroSection, HowItWorksSection, ReviewsSection, ServicesSection, SpeedAlertSection } from '../components/sections';
import { Navbar, Footer } from '../components/elements';


const applianceByCampaignTag = {
  "ROUPA": "washingMachine",
  "LOICA": "dishWasher",
  "FRIGO": "fridge"
}

const ImageRow = ({ img1, img2 }) => {
  return (
    <div class="img-row">
      <GatsbyImage image={img1} />
      <GatsbyImage image={img2} className="only-desktop" />
    </div>
  )

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
        <p class="section-subtitle">Vamos até si em toda Grande Lisboa e Margem Sul do Tejo!</p>
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
  let appliance = applianceByCampaignTag[pageContext.campaignTag.split(" ")[1]];
  const data = useStaticQuery(graphql`
  query {
    washingMachine: file(relativePath: { eq: "wm-guy.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    washingMachine2: file(relativePath: { eq: "wm-repair.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    dishWasher: file(relativePath: { eq: "technician_loica.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    dishWasher2: file(relativePath: { eq: "repair_loica.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    fridge: file(relativePath: { eq: "technician_frigo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    fridge2: file(relativePath: { eq: "technician_frigo_2.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
  }
`);
  const img1 = getImage(data[appliance]);
  const img2 = getImage(data[`${appliance}2`]);
  return (
    <SiteContext.Provider value={{ waLink, formattedNumber, phoneNumber }}>
      <Layout>
        <main>
          <Navbar />
          <HeroSection header={pageContext.header} subheader={pageContext.subheader} campaignTag={pageContext.campaignTag} />
          <ReviewsSection />
          <BelowFoldSection appliance={appliance} />
          <ImageRow img1={img1} img2={img2} />
          <HowItWorksSection />
          <GatsbyImage image={img2} className="only-mobile" />
          <ServicesSection />
          <SpeedAlertSection />
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
