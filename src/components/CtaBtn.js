import React, { useEffect } from 'react';

import { SiteContext } from './SiteContext';
import './CtaBtn.css';
import PhoneSvg from './PhoneSvg.js';
import WhatsappSvg from './WhatsappSvg';

const CtaBtn = () => {
	const { waLink } = React.useContext(SiteContext);
	return (
		<a href={waLink} target="_blank" class="cta cta-btn cta-button">
			<div class="cta-div">
				<WhatsappSvg />
				<span>Agende já!</span>
			</div>
		</a>
	)
}

export default CtaBtn;

