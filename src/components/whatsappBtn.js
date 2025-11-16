import React from 'react';
import { useSiteConfigHook } from '../hooks/siteConfigHook.js';

import WhatsappSvg from '../components/WhatsappSvg.js';
import './whatsappBtn.css';

const WhatsAppBtn = ({ waLink, formattedNumber }) => {
	return (
		<>
			<a href={waLink} class="cta cta-float whatsapp-float" target="_blank" rel="noopener" aria-label="Whatapp">
				<WhatsappSvg size="40" />
			</a>
			<div class="whatsapp-number"><span>{formattedNumber}</span></div>
		</>
	)
}

export default WhatsAppBtn;
