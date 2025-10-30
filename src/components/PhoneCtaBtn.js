import * as React from "react"

import PhoneSvg from '../components/PhoneSvg.js';

const PhoneCtaBtn = () => {
    return (
	<button class="cta-button">
	  <div class="cta-div">
	    <PhoneSvg />
	    <span>Ligue-nos já</span>
	  </div>
	  <span class="cta-phone">123 456 789</span>
	</button>
    )
}

export default PhoneCtaBtn;

