import React from "react";

import './HeroSection.css';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import CtaBtn from '../components/CtaBtn.js';
import WashingMachineRepairSvg from "./svg/WashingMachineRepairSvg";
import GoogleSvg from "./svg/GoogleSvg";
import EletrodomesticosSquareSvg from "./svg/EletrodomesticosSquareSvg";
import EletrodomesticosHorSvg from "./svg/EletrodomesticosHor";
import DishwasherRepairSvg from "./svg/DishwasherRepairSvg";
import FridgeRepairSvg from "./svg/FridgeRepairSvg";

const CampaignImg = ({ campaignTag }) => {
	if (campaignTag === "GENERAL") return (
		<div class="hero-img only-desktop">
			<EletrodomesticosSquareSvg size="" />
		</div>
	)
	if (campaignTag === "REP ROUPA LIS") return (
		<div class="hero-img">
			<WashingMachineRepairSvg size="" />
		</div>
	)
	if (campaignTag === "REP LOICA LIS") return (
		<div class="hero-img">
			<DishwasherRepairSvg size="" />
		</div>
	)
	if (campaignTag === "REP FRIDGE LIS") return (
		<div class="hero-img">
			<FridgeRepairSvg size="" />
		</div>
	)
	return null
}

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
					<CtaBtn id="hero-phone" />
					<p class="cta-nudge">Técnicos certificados em quem pode confiar</p>
				</div>
				<div class="img-desktop">
					<CampaignImg campaignTag={campaignTag} />
				</div>
			</div>
			{campaignTag === 'GENERAL' ? <div class="hero-img-hor">
				<EletrodomesticosHorSvg size="" />
			</div> : null}
			<div class="section-alt sp2">
				<p class="sp2number">8+ Anos</p>
				<p class="sp2text">De reparações fiáveis</p>
			</div>
		</section>
	);
}

export default HeroSection;

//<CtaBtn whatsapp={true} id="hero-wa" />
