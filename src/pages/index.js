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

const SpeedAlertBanner = () => {
    return (
        <section class="section speed-alert">
            <div class="section-container">
                <p class="alert-text">
                    UMA VEZ RECEBIDA A SUA CHAMADA, UM DO NOSSOS COLABORADORES AGENDARÁ UMA HOR CONSIGO, O MAIS RÁPIDO POSSÍVEL. GERALMENTE PODEMOS EFETUAR P SERVIÇO NA HORA OU NO PRÓPRIO DIA
                </p>
            </div>
        </section>
    )
}

const WhyUs = () => {
    return (
        <section id="quem-somos" class="section">
            <div class="section-container">
                <h2 class="section-title">Quem Somos</h2>
                <p class="section-text">
                    We are the leading appliance repair network for the -LOCATION- area. By working with a collective of local specialists, we guarantee a fast reply and can typically dispatch a technician to your home on the same day.
                </p>
                <p class="section-text">
                    Our collective mission is simple: provide fast, 24/7 service to get your life back to normal, quickly.                        </p>
                <CtaBtn />
            </div>
        </section>
    )
}

const Services = () => {
    return (
        <section id="servicos" class="section section-alt">
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
const Brands = () => {
    return (
        <section class="section">
            <div class="section-container">
                <h2 class="section-title">Trablalhamos com todas a maiores marcas</h2>
                <div className="brand-grid">
                    <StaticImage src="../images/brands/aeg.jpg" alt="AEG" />
                    <StaticImage src="../images/brands/bosch.jpg" alt="Bosch" />
                    <StaticImage src="../images/brands/indesit.jpg" alt="Indesit" />
                    <StaticImage width={140} height={53} src="../images/brands/lg.jpg" alt="LG" />
                    <StaticImage src="../images/brands/miele.jpg" alt="Miele" />
                    <StaticImage src="../images/brands/roca.jpg" alt="roca" />
                    <StaticImage src="../images/brands/samsung.jpg" alt="Samsung" />
                    <StaticImage src="../images/brands/sauber.jpg" alt="sauber" />
                    <StaticImage src="../images/brands/siemens.jpg" alt="Siemens" />
                    <StaticImage src="../images/brands/teka.jpg" alt="Teka" />
                    <StaticImage src="../images/brands/ufesa.jpg" alt="Ufesa" />
                    <StaticImage src="../images/brands/vaillant.jpg" alt="Vaillant" />
                    <StaticImage src="../images/brands/vulcano.jpg" alt="Vulcano" />
                    <StaticImage src="../images/brands/whirlpool.jpg" alt="Whirlpool" />
                    <StaticImage src="../images/brands/zanussi.jpg" alt="Zanussi" />
                    <StaticImage src="../images/brands/bauknecht.jpg" alt="Bauknecht" />
                    <StaticImage src="../images/brands/brandt.jpg" alt="brandt" />
                    <StaticImage src="../images/brands/carrier.jpg" alt="Carrier" />
                    <StaticImage src="../images/brands/edesa.jpg" alt="Edesa" />
                    <StaticImage src="../images/brands/electrolux.jpg" alt="Alectrolux" />
                </div>
            </div>
        </section>
    )
}
const ServiceArea = () => {
    return (
        <section class="section">
            <div class="section-container">
                <h2 class="section-title">Area de Serviço</h2>
            </div>
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
                <SpeedAlertBanner />
                <WhyUs />
                <Services />
                <Brands />
                <ReviewsSection />
                <ServiceArea />
                <ContactSection />
                <Footer />
                <GoogleTag />
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)
