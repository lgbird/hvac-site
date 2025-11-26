import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import CtaBtn from '../components/CtaBtn.js';
import Svg from '../components/Svg.js';
import './BelowFoldSection.css';


const WhyUs = () => {
  return (
    <section id="quem-somos" class="section whyus">
      <div class="section-container">
        <div>
          <h2 class="section-title">Quem Somos</h2>
          <p class="section-text">
            Somos a rede líder de  em reparações de eletrodomésticos em Grande Lisboa. Trabalhamos em conjunto com os melhores técnicos e empresas locais especializadas para lhe garantir um serviço rápido e de confiança, 24 horas por dia, 7 dias por semana
          </p>
          <p class="section-text">
            A nossa missão é simples: resolver o seu problema com velocidade e eficácia, para que a sua vida possa voltar à normalidade
          </p>
          <div class="only-mobile only-mobile-cta">
            <CtaBtn id="why-us" />
          </div>
        </div>
      </div>
    </section>
  )
}

const Usps = () => {
  return (
    <div class="section-container btm-padding-section usps">
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
      <CtaBtn id="usps" />
    </div>
  )
}

const HowItWorks = () => {
  return (
    <section id="howitworks" class="section hiw">
      <h1 class="section-title">Como funciona</h1>
      <div class="section-container btm-padding-section">
        <div class="steps-container">
          <div class="step step-1">
            <div class="step-badge">1</div>
            <h2 class="step-title">Contacto imediato</h2>
            <p>
              Ao contactar-nos, acionamos de imediato a nossa rede de profissionais na sua área.
            </p>
            <p>
              Agendamos uma visita para o mais breve possível, muitas vezes para a mesma hora ou para o próprio dia.
            </p>
          </div>
          <div class="step step-2">
            <div class="step-badge">2</div>
            <h2 class="step-title">Deslocação do técnico</h2>
            <p>
              Um técnico credenciado desloca-se a sua casa. Diagnostica o problema e apresenta-lhe um orçamento detalhado na hora.
            </p>
            <p>
              Custo fixo de deslocação: 39,99€
            </p>
          </div>
          <div class="step step-3">
            <div class="step-badge">3</div>
            <h2 class="step-title">Reparação</h2>
            <p>Dependendo do problema, a reparação é feita:</p>
            <p>1. No local, de imediato.</p>
            <p>2. Ou nas nossas instalações</p>
            <p>Sempre que possível, a reparação será feita no local, na hora</p>
          </div>
          <div class="step step-4">
            <div class="step-badge">4</div>
            <h2 class="step-title">Entrega</h2>
            <p>
              Entrega do artigo reparado. Todo o serviço de reparação beneficia de uma garantia sólida.
            </p>
          </div>
        </div>
        <CtaBtn id="hiw" />
      </div>
    </section>
  )
}


const BelowFoldSection = () => {
  return (
    <section id="below-fold" class="below-fold-section">
      <WhyUs />
      <section class="image-section">
        <StaticImage src="../images/technician.png" layout="fullWidth" />
      </section>
      <Usps />

      <HowItWorks />
    </section>
  )
}

export default BelowFoldSection;
