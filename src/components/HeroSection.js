import React from "react";
import './HeroSection.css';
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import CtaBtn from '../components/CtaBtn.js';
import WashingMachineSvg from "./svg/WashingMachineSvg";

const HeroSection = ({ header, subheader, campaignTag = 'GENERAL' }) => {
	const data = useStaticQuery(graphql`
  query {
    generalImage: file(relativePath: { eq: "eletrodomesticos-r.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    }
  }
`);

	const generalImage = getImage(data.generalImage);

	return (
		<section class="hero" style={{ position: 'relative', overflow: 'hidden' }}>
			<div class="hero-content">
				<h1 class="hero-title">{header}</h1>
				{campaignTag === 'GENERAL' ? <GatsbyImage
					image={generalImage}
					alt="Hero Background"
					className="hero-img"
					loading="eager"
					fetchpriority="high"
				/>
					:
					<WashingMachineSvg size={200} />}
				<p class="hero-subtitle">{subheader}</p>
				<CtaBtn />
			</div>
		</section>
	);
}

export default HeroSection;
