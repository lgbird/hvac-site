import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout.js';
import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ContactSection from '../components/ContactSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import CtaBtn from '../components/CtaBtn.js';
import GoogleTag from '../components/GoogleTag.js';

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

        <section id="quem-somos" class="section">
            <div class="section-container">
                <h2 class="section-title">Quem Somos</h2>
                <p class="section-text">
                    Somos uma equipia dedicada exclusivamente à instalação, manutenção e reparação de sistemas de ar condicionado.
                </p>
                <p class="section-text">
                    Garantimos soluções eficazes para o seu conforto, seja em casa ou na empresa. Vamos até si em {pageData.serviceArea}
                </p>
                <p class="section-text">
                    <b>A sua climatização, a nossa especialidade</b>
                </p>
                <CtaBtn />
            </div>
        </section>

        <section id="servicos" class="section section-alt">
            <div class="section-container">
                <div class="steps">
                    <div class="step">
                        <h3 class="step-number">Instalação</h3>
                        <p class="step-text">Sistemas novos, com profissionalismo e garantia</p>
                    </div>
                    <div class="step">
                        <h3 class="step-number">Manutenção</h3>
                        <p class="step-text">Limpeza e revisão periódica para o melhor funcionamento</p>
                    </div>
                    <div class="step">
                        <h3 class="step-number">Reparação</h3>
                        <p class="step-text">Conserto rápido e eficiente para resolver seu problema</p>
                    </div>
                </div>
                <CtaBtn />
            </div>
        </section>

        <ContactSection />

        <ReviewsSection />

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
