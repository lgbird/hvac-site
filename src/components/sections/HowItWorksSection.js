import React from 'react';

import { CtaBtn } from '../elements';
import './BelowFoldSection.css';
import { PhoneSvg, DeliveryVanSvg, PartySvg, WrenchRepairSvg } from '../svg';

const HowItWorks = () => {
  return (
    <section id="howitworks" class="section hiw">
      <h1 class="section-title">Como funciona</h1>
      <div class="section-container">
        <div class="steps-container">
          <div class="step step-1">
            <div class="step-badge"><PhoneSvg size={42} fill="#000" /></div>
            <h2 class="step-title">Contacto imediato</h2>
            <p>
              Ao contactar-nos, acionamos de imediato a nossa rede de profissionais na sua área.
            </p>
            <p>
              Agendamos uma visita para o mais breve possível, normalmente para o próprio dia.
            </p>
          </div>
          <div class="step step-2">
            <div class="step-badge"><DeliveryVanSvg size={42} /></div>
            <h2 class="step-title">Deslocação do técnico</h2>
            <p>
              Um técnico credenciado desloca-se a sua casa. Diagnostica o problema e apresenta-lhe um orçamento detalhado na hora.
            </p>
            <p>
              Custo fixo de deslocação: 25€
            </p>
          </div>
          <div class="step step-3">
            <div class="step-badge"><WrenchRepairSvg size={36} /></div>
            <h2 class="step-title">Reparação</h2>
            <p>Sempre que possível, a reparação será feita no local, na hora</p>
          </div>
          <div class="step step-4">
            <div class="step-badge"><PartySvg size={42} /></div>
            <h2 class="step-title">Entrega</h2>
            <p>
              Entrega do artigo reparado com garantia sobre a reparação
            </p>
          </div>
        </div>
        <CtaBtn id="hiw" />
      </div>
    </section>
  )
}

export default HowItWorks;
