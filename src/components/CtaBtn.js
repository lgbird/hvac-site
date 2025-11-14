import React, { useEffect } from 'react';

import './CtaBtn.css';
import PhoneSvg from './PhoneSvg.js';

const CtaBtn = () => {
	let phoneNumber = process.env.GATSBY_PHONE_NUMBER;
	return (
		<a href={`https://api.whatsapp.com/send/?phone=351${phoneNumber}`} target="_blank" class="cta cta-btn cta-button">
			<div class="cta-div">
				<PhoneSvg />
				<span>Agende já!</span>
			</div>
		</a>
	)
}

export default CtaBtn;

