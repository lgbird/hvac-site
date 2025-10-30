import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import PhoneCtaBtn from '../components/PhoneCtaBtn.js';

const HeroSection = ({ header, subheader }) => (
    <section class="hero" style={{ position: 'relative', overflow: 'hidden' }}>
	<StaticImage
	  src="../images/background.webp"
	  alt="Hero Background"
	  style={{
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: '100%',
	    height: '100%',
	    objectFit: 'cover',
	    zIndex: -1,
	  }}
	  loading="eager"
	  fetchpriority="high"
	/>
	<div class="hero-content">
	    <h1 class="hero-title">{header}</h1>
	    <p class="hero-subtitle">{subheader}</p>
	    <PhoneCtaBtn />
	</div>
    </section>
);

export default HeroSection;
