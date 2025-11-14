import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import WhatsappSvg from '../components/WhatsappSvg.js';
import './whatsappBtn.css';

const WhatsAppBtn = () => {
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
		<>
			<a href={`https://api.whatsapp.com/send/?phone=351${phoneNumber}`} class="cta cta-float whatsapp-float" target="_blank" rel="noopener" aria-label="Whatapp">
				<WhatsappSvg size="40" />
			</a>
			<div class="whatsapp-number"><span>{formattedNumber}</span></div>
		</>
	)
}

export default WhatsAppBtn;
