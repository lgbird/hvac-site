import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import './ContactInfoSection.css';
import Svg from '../components/Svg.js';

const ContactInfoSection = () => {
  const data = useStaticQuery(graphql`
	query {
	  site {
	    siteMetadata {
	      phoneNumber
	    }
	  }
	}
      `)
  let phoneNumber = data.site.siteMetadata.phoneNumber;
  let formattedNumber = phoneNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
  return (
    <section class="section">
      <div class="section-container">
        <h2 class="section-title">Informações de Contacto</h2>
        <div>
          <div class="contact-info">
            <Svg name="whatsapp-cartoon" />
            <div class="contact-info-text-block">
              <p class="contact-info-title">WhatsApp</p>
              <p class="contact-info-text">{formattedNumber}</p>
            </div>
          </div>
          <div class="contact-info">
            <Svg name="phone-24" />
            <div class="contact-info-text-block">
              <p class="contact-info-title">Telefone</p>
              <p class="contact-info-text">{formattedNumber}</p>
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
      </div>
    </section>
  )
}

export default ContactInfoSection;
