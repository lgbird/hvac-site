import * as React from 'react'

import WhatsappSvg from '../components/WhatsappSvg.js';

const WhatsAppBtn = () => {
	return (
	    <a href="https://api.whatsapp.com/send/?phone=351967087547" class="whatsapp-float" target="_blank" rel="noopener">
		<WhatsappSvg size="40" />
		</a>
	)
}

export default WhatsAppBtn;
