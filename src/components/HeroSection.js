import React from "react";
import './HeroSection.css';
import { StaticImage } from 'gatsby-plugin-image'

import CtaBtn from '../components/CtaBtn.js';

const HeroSection = ({ header, subheader }) => (
	<section class="hero" style={{ position: 'relative', overflow: 'hidden' }}>
		<div class="hero-content">
			<h1 class="hero-title">{header}</h1>
			<StaticImage
				src="../images/eletrodomesticos.png"
				alt="Hero Background"
				className="hero-img"
				loading="eager"
				fetchpriority="high"
			/>
			<p class="hero-subtitle">{subheader}</p>
			<CtaBtn />
		</div>
	</section>
);

export default HeroSection;
