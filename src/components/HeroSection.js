import React from "react";

import './HeroSection.css';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import CtaBtn from '../components/CtaBtn.js';
import WashingMachineRepairSvg from "./svg/WashingMachineRepairSvg";
import GoogleSvg from "./svg/GoogleSvg";

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
			<div class="hero-row">
				<div class="hero-content">
					<div class="google-reviews-badge">
						<div class="google-reviews-badge-content">
							<GoogleSvg size={32} />
							<span>
								4.7 ⭐ ⭐ ⭐ ⭐ ⭐ 70+ Avaliações
							</span>
						</div>
					</div>
					<h1 class="hero-title">{header}</h1>
					<p class="hero-subtitle">{subheader}</p>
					<div class="cta-desktop">
						<CtaBtn id="hero-phone" />
						<CtaBtn whatsapp={true} id="hero-wa" />
						<p class="cta-nudge">Técnicos certificados em quem pode confiar</p>
					</div>
				</div>
				<div class="img-desktop only-desktop">
					{campaignTag === 'GENERAL' ? <GatsbyImage
						image={generalImage}
						alt="Hero Background"
						className="hero-img only-desktop"
						loading="eager"
						fetchpriority="high"
					/>
						:
						<div class="hero-img">
							<WashingMachineRepairSvg size="" />
						</div>}
				</div>
				<div class="cta-row">
					<div class="cta-col">
						<CtaBtn id="hero-phone" />
						<CtaBtn whatsapp={true} id="hero-wa" />
					</div>

					{campaignTag === 'GENERAL' ? null :
						<div class="hero-img">
							<WashingMachineRepairSvg size="" />
						</div>}
				</div>
				<p class="cta-nudge only-mobile">Técnicos certificados em quem pode confiar</p>
			</div>
			{campaignTag === 'GENERAL' ? <GatsbyImage
				image={generalImage}
				alt="Hero Background"
				className="hero-img-hor"
				loading="eager"
				fetchpriority="high"
			/> : null}
			<div class="section-alt sp2">
				<p class="sp2number">8+ Anos</p>
				<p class="sp2text">De reparações fiáveis</p>
			</div>
		</section>
	);
}

export default HeroSection;
