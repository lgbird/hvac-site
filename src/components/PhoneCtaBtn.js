import * as React from "react"

import PhoneSvg from '../components/PhoneSvg.js';

const PhoneCtaBtn = () => {
    return (
	<a href="tel:+351211234567" class="cta-button">
	  <div class="cta-div">
	    <PhoneSvg />
	    <span>Ligue-nos já</span>
	  </div>
	  <span class="cta-phone">123 456 789</span>
	</a>
    )
}

export default PhoneCtaBtn;

