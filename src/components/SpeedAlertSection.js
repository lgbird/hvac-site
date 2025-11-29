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
          <a href={`tel:+351${phoneNumber}`} data-btn="spaler-phone" target="_blank" class="cta icon-btn  phone-icon-btn" aria-label='telefone'>
            <PhoneSvg size={35} />
          </a>
          <a href={`tel:+351${phoneNumber}`} data-btn="spaler-phone" target="_blank" class="speed-alert-text speed-alert-text-large">{formattedNumber}</a>
        </div>
        <p class="speed-alert-text">
          LOGO APÓS O SEU CONTACTO, DESPACHAMOS UM TÉCNICO. GERALMENTE EFETUAMOS O SERVIÇO NA HORA OU NO PRÓPRIO DIA
        </p>
      </div>
    </section>
  )
}

export default SpeedAlertSection;

          //<a href={waLink} data-btn="spaler-wa" target="_blank" class="cta icon-btn wa-icon-btn" aria-label='whatsapp'>
            //<WhatsappSvg size={35} />
          //</a>
