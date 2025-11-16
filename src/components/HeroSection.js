import React from "react";
import './HeroSection.css';
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import CtaBtn from '../components/CtaBtn.js';
import imgGeneral from '../images/eletrodomesticos-r.png';

const HeroSection = ({ header, subheader, campaignTag = 'GENERAL' }) => {
	const data = useStaticQuery(graphql`
  query {
    generalImage: file(relativePath: { eq: "eletrodomesticos-r.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    }
    washingMachineImage: file(relativePath: { eq: "washing-machine.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    }
  }
`);
	const images = {
		GENERAL: getImage(data.generalImage),
		WASHING_MACHINE: getImage(data.washingMachineImage),
	};

	const image = images[campaignTag];

	return (
		<section class="hero" style={{ position: 'relative', overflow: 'hidden' }}>
			<div class="hero-content">
				<h1 class="hero-title">{header}</h1>
				<GatsbyImage
					image={image}
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
}

export default HeroSection;
