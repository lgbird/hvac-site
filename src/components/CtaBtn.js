import React, { useEffect } from 'react';

import { SiteContext } from './SiteContext';
import './CtaBtn.css';
import PhoneSvg from './PhoneSvg.js';
import WhatsappSvg from './WhatsappSvg';

const CtaBtn = ({ whatsapp = false, id = "" }) => {
	const { waLink, phoneNumber, formattedNumber } = React.useContext(SiteContext);
	if (whatsapp) return (
		<a href={waLink} data-btn={id} target="_blank" class="cta cta-btn cta-button cta-button-whatsapp">
			<div class="cta-div">
				<WhatsappSvg />
				<span>WhatsApp</span>
			</div>
		</a>
	)
	return (
		<a href={`tel:+351${phoneNumber}`} data-btn={id} target="_blank" class="cta cta-btn cta-button">
			<div class="cta-div">
				<PhoneSvg />
				<span class="only-desktop">{formattedNumber}</span>
				<span class="only-mobile">Ligue já!</span>
			</div>
		</a>
	)
}

export default CtaBtn;

