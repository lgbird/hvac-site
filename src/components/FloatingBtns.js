import React from 'react';

import { SiteContext } from "./SiteContext.js";
import WhatsappSvg from '../components/WhatsappSvg.js';
import PhoneSvg from './svg/PhoneSvg.js';
import './FloatingBtns.css';

const FloatingBtns = () => {
	const { waLink, phoneNumber } = React.useContext(SiteContext);
	return (
		<div class="floating-btns">
			<a href={`tel:+351${phoneNumber}`} data-btn="float-phone" class="cta cta-float floating-btn phone-float" target="_blank" rel="noopener" aria-label="phone">
				<PhoneSvg size="40" />
			</a>
		</div>
	)
}

export default FloatingBtns;


			//<a href={waLink} data-btn="float-wa" class="cta cta-float floating-btn whatsapp-float" target="_blank" rel="noopener" aria-label="Whatsapp">
			//	<WhatsappSvg size="40" />
			//</a>
