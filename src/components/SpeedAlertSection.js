import React from 'react';
import PhoneSvg from './PhoneSvg';
import { SiteContext } from './SiteContext';
import './SpeedAlertSection.css';
import WhatsappSvg from './WhatsappSvg';

const SpeedAlertSection = () => {
  const { waLink, formattedNumber, phoneNumber } = React.useContext(SiteContext);
  return (
    <section class="section speed-alert">
      <div class="section-container">
        <div class="speed-alert-contact-info">
          <a href={waLink} target="_blank" class="icon-btn wa-icon-btn">
            <WhatsappSvg size={35} />
          </a>
          <span class="speed-alert-text speed-alert-text-large">{formattedNumber}</span>
          <a href={`tel:+351${phoneNumber}`} target="_blank" class="icon-btn phone-icon-btn">
            <PhoneSvg size={35} />
          </a>
        </div>
        <p class="speed-alert-text">
          LOGO APÓS O SEU CONTACTO, DESPACHAMOS UM TÉCNICO. GERALMENTE EFETUAMOS O SERVIÇO NA HORA OU NO PRÓPRIO DIA
        </p>
      </div>
    </section>
  )
}

export default SpeedAlertSection;
