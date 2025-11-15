import * as React from "react"
import { useSiteConfigHook } from "../hooks/siteConfigHook";

import './ContactInfoSection.css';
import Svg from '../components/Svg.js';

const ContactInfoSection = () => {
  const { phoneNumber, formattedNumber } = useSiteConfigHook();
  return (
    <section id="contact-info" class="section">
      < div class="section-container" >
        <h2 class="section-title">Informações de Contacto</h2>
        <div>
          <div class="contact-info">
            <Svg name="whatsapp-cartoon" />
            <div class="contact-info-text-block">
              <p class="contact-info-title">WhatsApp</p>
              <a class="nav-link" href={`https://api.whatsapp.com/send/?phone=351${phoneNumber}`} target="_blank">
                {formattedNumber}
              </a>
            </div>
          </div>
          <div class="contact-info">
            <Svg name="phone-24" />
            <div class="contact-info-text-block">
              <p class="contact-info-title">Telefone</p>
              <a class="nav-link" href={`tel:+351${phoneNumber}`} target="_blank">
                {formattedNumber}
              </a>
            </div>
          </div>
          <div class="contact-info">
            <Svg name="clock" />
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
