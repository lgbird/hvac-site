import * as React from "react"

import './FixedBottomCta.css';
import PhoneSvg from "../components/PhoneSvg.js";

const FixedBottomCta = () => {
  return (
    <>
      <a href="#" class="fixed-cta-bottom">
        <PhoneSvg size="40px" />
        <span>Agende Já!</span>
      </a>
      <div class="cta-placeholder"></div>
    </>
  )
}

export default FixedBottomCta;
