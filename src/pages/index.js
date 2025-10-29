import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SEO from '../components/Seo.js';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import ReviewsSection from '../components/ReviewsSection.js';
import Footer from '../components/Footer.js';
import PhoneSvg from '../components/PhoneSvg.js';

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  if (window.innerWidth <= 768) {
    navMenu.classList.toggle('nav-menu-active');
  }
}



const IndexPage = () => {
  return (
    <main>
        <Navbar home={true} />
        <HeroSection header="Especialistas em ar condicionado" subheader="Instalação, reparação e manutenção de ar condicionado em todo o Algarve" />

    <section id="quem-somos" class="section">
        <div class="container">
            <h2 class="section-title">Quem Somos</h2>
            <p class="section-text">
                Somos uma rede nacional de profissionais locais, unidos por um compromisso com o trabalho bem feito. 
                De eletricistas a canalizadores, pintores a pedreiros, carpinteiros a serralheiros, temos o técnico 
                qualificado para a sua necessidade.
            </p>
            <button class="cta-button secondary scroll-to-form">Encontrar Profissional</button>
        </div>
    </section>

    <section id="como-funciona" class="section section-alt">
        <div class="container">
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
            <button class="cta-button secondary scroll-to-form">Contate-nos</button>
        </div>
    </section>

    <ReviewsSection />

    <section id="porque-nos" class="section">
        <div class="container">
            <h2 class="section-title">Porque Escolher-nos</h2>
            <div class="features">
                <div class="feature">
                    <h3 class="feature-title">Especialistas apenas em ar condicionado</h3>
                    <p class="feature-text">Especialistas apenas em ar condicionado</p>
                </div>
                <div class="feature">
                    <h3 class="feature-title">Atendimento rápido e transparente</h3>
                </div>
                <div class="feature">
                    <h3 class="feature-title">Técnicos qualificados e certificados</h3>
                </div>
            </div>
            <button class="cta-button secondary scroll-to-form">Contate-nos</button>
        </div>
    </section>

    <section id="contacto" class="section section-alt">
        <div class="container">
            <h2 class="section-title">Serviços</h2>
            <p class="section-text">Descreva o seu projeto e nós encontraremos o profissional ideal para si.</p>
            
            <form class="contact-form">
                <div class="form-group">
                    <label for="name" class="form-label">Nome</label>
                    <input type="text" id="name" class="form-input" required />
                </div>
                
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" required />
                </div>
                
                <div class="form-group">
                    <label for="phone" class="form-label">Telemóvel</label>
                    <input type="tel" id="phone" class="form-input" required />
                </div>
                
                <div class="form-group">
                    <label for="location" class="form-label">Localização</label>
                    <input type="text" id="location" class="form-input" required />
                </div>
                
                <div class="form-group">
                    <label for="description" class="form-label">Descrição do Trabalho</label>
                    <textarea id="description" class="form-textarea" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="cta-button">Enviar Pedido</button>
            </form>
        </div>
    </section>

        <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Climatização Algarve"/>
)
