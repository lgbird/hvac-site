import React, { useEffect } from 'react';

import WhatsappSvg from '../components/WhatsappSvg.js';
import './CtaBtn.css';

const CtaBtn = () => {
	let phoneNumber = process.env.GATSBY_PHONE_NUMBER;
	return (
		<a href={`https://api.whatsapp.com/send/?phone=351${phoneNumber}`} target="_blank" class="cta cta-btn cta-button">
			<div class="cta-div">
				<WhatsappSvg />
				<span>Contate-nos</span>
			</div>
		</a>
	)
}

export default CtaBtn;

