import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { CtaBtn } from '../elements';
import './BelowFoldSection.css';
import { Hours24Svg, CertifiedSvg, FastDeliverySvg } from "../svg";


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
          <Hours24Svg />
          <p class="feature-text">Disponibilidade 24/7</p>
        </div>
        <div class="feature">
          <CertifiedSvg />
          <p class="feature-text">Técnicos Certificados</p>
        </div>
        <div class="feature">
          <FastDeliverySvg />
          <p class="feature-text">Serviço Rápido</p>
        </div>
      </div>
      <div class="only-mobile" style={{ 'width': '100%' }}>
        <CtaBtn id="usps" />
      </div>
    </div>
  )
}

const BelowFoldSection = ({ appliance }) => {
  const data = useStaticQuery(graphql`
  query {
    washingMachine: file(relativePath: { eq: "technician.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    dishWasher: file(relativePath: { eq: "technician_loica_2.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
    fridge: file(relativePath: { eq: "technician_frigo_3.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    },
  }
`);

  const generalImage = getImage(data[appliance]);
  return (
    <section id="below-fold" class="below-fold-section">
      <section class="image-section">
        <GatsbyImage image={generalImage} />
      </section>
      <WhyUs />
      <Usps />
    </section>
  )
}

export default BelowFoldSection;
