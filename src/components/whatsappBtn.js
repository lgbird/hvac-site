import React from 'react';

import WhatsappSvg from '../components/WhatsappSvg.js';
import './whatsappBtn.css';

const WhatsAppBtn = ({ waLink, formattedNumber }) => {
	return (
		<a href={waLink} data-btn="float-wa" class="cta cta-float whatsapp-float" target="_blank" rel="noopener" aria-label="Whatapp">
			<WhatsappSvg size="40" />
		</a>
	)
}

export default WhatsAppBtn;
