import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import CtaBtn from '../components/CtaBtn.js';
import Svg from '../components/Svg.js';
import './BelowFoldSection.css';
import PhoneSvg from './svg/PhoneSvg.js';
import DeliveryVanSvg from './svg/DeliveryVanSvg.js';
import PartySvg from './svg/PartySvg.js';
import WrenchRepairSvg from './svg/WrenchRepairSvg.js';


const WhyUs = () => {
  return (
    <section id="quem-somos" class="section whyus">
      <div class="section-container">
        <h2 class="section-title">Quem Somos</h2>
        <p class="section-text">
          Somos a rede líder de  em reparações de eletrodomésticos em Grande Lisboa. Trabalhamos em conjunto com os melhores técnicos e empresas locais especializadas para lhe garantir um serviço rápido e de confiança, 24 horas por dia, 7 dias por semana
        </p>
        <p class="section-text">
          A nossa missão é simples: resolver o seu problema com velocidade e eficácia, para que a sua vida possa voltar à normalidade
        </p>
        <CtaBtn id="why-us" />
      </div>
    </section>
  )
}

const Usps = () => {
  return (
    <div class="section-container usps">
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
      <div class="only-mobile" style={{ 'width': '100%' }}>
        <CtaBtn id="usps" />
      </div>
    </div>
  )
}



const BelowFoldSection = () => {
  return (
    <section id="below-fold" class="below-fold-section">
      <section class="image-section">
        <StaticImage src="../images/technician.png" layout="fullWidth" />
      </section>
      <WhyUs />
      <Usps />
    </section>
  )
}

export default BelowFoldSection;
