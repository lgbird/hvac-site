import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

import Layout from '../components/Layout.js';
import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ContactSection from '../components/ContactSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import CtaBtn from '../components/CtaBtn.js';
import GoogleTag from '../components/GoogleTag.js';
import Svg from '../components/Svg.js';
import SpeedAlertSection from "../components/SpeedAlertSection.js";
import BrandsSection from "../components/BrandsSection.js";
import FixedBottomCta from "../components/FixedBottomCta.js";
import ContactInfoSection from "../components/ContactInfoSection.js";

const WhyUs = () => {
    return (
        <section id="quem-somos" class="section">
            <div class="section-container section-double">
                <div>
                    <h2 class="section-title">Quem Somos</h2>
                    <p class="section-text">
                        Somos a rede líder de  em reparações de eletrodomésticos em Grande Lisboa. Trabalhamos em conjunto com os melhores técnicos e empresas locais especializadas para lhe garantir um serviço rápido e de confiança, 24 horas por dia, 7 dias por semana
                    </p>
                    <p class="section-text">
                        A nossa missão é simples: resolver o seu problema com velocidade e eficácia, para que a sua vida possa voltar à normalidade
                    </p>
                    <div class="only-mobile only-mobile-cta">
                        <CtaBtn />
                    </div>
                </div>

                <StaticImage src="../images/technician.png" />
            </div>
            <div class="section-container btm-padding-section">
                <div class="features">
                    <div class="feature">
                        <Svg name="24-hours" />
                        <p class="feature-text">Disponibilidade 24/7</p>
                    </div>
                    <div class="feature">
                        <Svg name="certified" />
                        <p class="feature-text">Técnicos Certificados</p>
                    </div>
                    <div class="feature">
                        <Svg name="fast-delivery" />
                        <p class="feature-text">Serviço Rápido</p>
                    </div>
                </div>
                <CtaBtn />
            </div>
        </section>
    )
}

const USPs = () => {
    return (
        <section id="usps" class="section">
            <div class="section-container">
                <div class="features">
                    <div class="feature">
                        <Svg name="24-hours" />
                        <p class="feature-text">Disponibilidade 24/7</p>
                    </div>
                    <div class="feature">
                        <Svg name="certified" />
                        <p class="feature-text">Técnicos Certificados</p>
                    </div>
                    <div class="feature">
                        <Svg name="fast-delivery" />
                        <p class="feature-text">Serviço Rápido</p>
                    </div>
                </div>
                <CtaBtn />
            </div>
        </section>
    )
}

const Services = () => {
    return (
        <section id="servicos" class="section section-alt btm-padding-section">
            <div class="section-container">
                <div class="services">
                    <div class="service">
                        <Svg name="washing-machine" />
                        <h3 class="service-title">Reparação de Máquinas de Lavar Roupa</h3>
                        <p class="service-text">Resolvemos avarias rapidamente, desde fugas de água a problemas de centrifugação. Devolvemos a sua lavadora a um estado como novo, para que não fique com a roupa por lavar.</p>
                    </div>
                    <div class="service">
                        <Svg name="dishwasher" />
                        <h3 class="service-title">Reparação de Máquinas de Lavar Loiça</h3>
                        <p class="service-text">A sua loiça a acumular-se? Reparamos problemas de limpeza, entupimentos e avarias elétricas. Garantimos que sua máquina volta a trabalhar por si.</p>
                    </div>
                    <div class="service">
                        <Svg name="freezer" />
                        <h3 class="service-title">Reparação de Frigoríficos</h3>
                        <p class="service-text">Não arrisque perder alimentos. Solucionamos urgentemente problemas de falta de frio, fugas de gás ou formação excessiva de gelo. A sua tranquilidade é nossa prioridade.</p>
                    </div>
                    <div class="service">
                        <Svg name="blinds" />
                        <h3 class="service-title">Reparação estores</h3>
                        <p class="service-text">Estores elétricos ou manuais avariados? Reparamos cordas, motores, lâminas e problemas de enrolamento. Recuperamos a funcionalidade e comodidade para a sua casa.</p>
                    </div>
                </div>
                <CtaBtn />
            </div>
        </section>
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

const ImageRow = () => {
    return (
        <div class="img-row">
            <StaticImage src="../images/wm-guy.png" />
            <StaticImage src="../images/wm-repair.png" className="only-desktop" />
        </div>
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
        <Layout>
            <main>
                <Navbar home={true} />
                <HeroSection header={pageData.heroHeader} subheader={pageData.heroSubheader} />
                <SpeedAlertSection />
                <WhyUs />
                <ImageRow />
                <Services />
                <StaticImage src="../images/wm-repair.png" className="only-mobile" />
                <BrandsSection />
                <ReviewsSection />
                <ResponsiveRow />
                <ContactSection />
                <Footer />
                <GoogleTag />
                <FixedBottomCta />
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)
