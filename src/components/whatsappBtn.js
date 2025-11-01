import * as React from 'react'

import WhatsappSvg from '../components/WhatsappSvg.js';

const WhatsAppBtn = () => {
	return (
    <a href="https://api.whatsapp.com/send/?phone=351967087547" class="cta whatsapp-float" target="_blank" rel="noopener" aria-label="Whatapp">
		<WhatsappSvg size="40" />
		</a>
	)
}

export default WhatsAppBtn;
