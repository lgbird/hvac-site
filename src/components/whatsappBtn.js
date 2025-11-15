import React from 'react';
import { useSiteConfigHook } from '../hooks/siteConfigHook.js';

import WhatsappSvg from '../components/WhatsappSvg.js';
import './whatsappBtn.css';

const WhatsAppBtn = () => {
	let { phoneNumber, formattedNumber } = useSiteConfigHook();
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
