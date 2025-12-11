import * as React from "react"

import './ContactInfoSection.css';
import { SiteContext } from "../SiteContext";
import { WhatsappCartoonSvg, Phone24Svg, ClockSvg } from "../svg";

const WaInfo = () => {
  const { waLink, phoneNumber, formattedNumber } = React.useContext(SiteContext);
  return (
    <div class="contact-info">
      <WhatsappCartoonSvg />
      <div class="contact-info-text-block">
        <p class="contact-info-title">WhatsApp</p>
        <a class="cta nav-link" href={waLink} target="_blank" data-btn="info-wa">
          {formattedNumber}
        </a>
      </div>
    </div>
  )
}

const ContactInfoSection = () => {
  const { waLink, phoneNumber, formattedNumber } = React.useContext(SiteContext);
  return (
    <section id="contact-info" class="contact-info-section">
      < div class="section-container" >
        <h2 class="section-title">Informações de Contacto</h2>
        <div>
          <div class="contact-info">
            <Phone24Svg />
            <div class="contact-info-text-block">
              <p class="contact-info-title">Telefone</p>
              <a class="cta nav-link" href={`tel:+351${phoneNumber}`} target="_blank" data-btn="info-phone">
                {formattedNumber}
              </a>
            </div>
          </div>
          <div class="contact-info">
            <ClockSvg />
            <div class="contact-info-text-block">
              <p class="contact-info-title">Horário de Funcionamento</p>
              <p class="contact-info-text">24 horas, segunda a domingo</p>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default ContactInfoSection;
