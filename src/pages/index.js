import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

import { useSiteConfigHook } from "../hooks/siteConfigHook.js";
import { SiteContext } from "../components/SiteContext.js";
import Layout from '../components/Layout.js';
import SEO from '../components/Seo.js';

import { BelowFoldSection, BrandsSection, ContactInfoSection, ContactSection, HeroSection, ReviewsSection, ServicesSection, SpeedAlertSection } from '../components/sections';
import { Navbar, Footer } from '../components/elements';


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

const IndexPage = () => {
    const { heroHeader, heroSubheader, phoneNumber, waMessage, formattedNumber } = useSiteConfigHook();
    let waLink = `https://api.whatsapp.com/send/?phone=351${phoneNumber}&text=${encodeURIComponent(waMessage)}`;
    return (
        <SiteContext.Provider value={{ waLink, formattedNumber, phoneNumber }}>
            <Layout>
                <main>
                    <Navbar home={true} />
                    <HeroSection header={heroHeader} subheader={heroSubheader} />
                    <SpeedAlertSection />
                    <BelowFoldSection />
                    <ImageRow />
                    <ServicesSection />
                    <StaticImage src="../images/wm-repair.png" className="only-mobile" />
                    <BrandsSection />
                    <ReviewsSection />
                    <ResponsiveRow />
                    <ContactSection />
                    <Footer />
                </main>
            </Layout>
        </SiteContext.Provider>
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)
