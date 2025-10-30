import * as React from "react"

import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import PhoneCtaBtn from '../components/PhoneCtaBtn.js';

const IndexPage = () => {
  return (
    <main>
        <Navbar home={true} />
        <HeroSection header="Especialistas em ar condicionado" subheader="Instalação, reparação e manutenção de ar condicionado em todo o Algarve" />

    <section id="quem-somos" class="section">
        <div class="section-container">
            <h2 class="section-title">Quem Somos</h2>
            <p class="section-text">
                Somos uma equipia dedicada exclusivamente à instalação, manutenção e reparação de sistemas de ar condicionado.
            </p>
            <p class="section-text">
                Com profundo conhecimento do clima algarvio, garantimos soluções eficazes para o seu conforto, seja em casa ou na empresa.
            </p>
            <p class="section-text">
                <b>A sua climatização, a nossa especialidade</b>
            </p>
            <PhoneCtaBtn />
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
            <PhoneCtaBtn />
        </div>
    </section>

    <ReviewsSection />

        <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="ClimAlgarve"/>
)
