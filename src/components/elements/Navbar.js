import * as React from "react"

import { SiteContext } from "../SiteContext.js";
import './Navbar.css';
import { useSiteConfigHook } from "../../hooks/siteConfigHook.js";
import { RepairLogoSvg, PhoneSvg, WhatsappSvg } from '../svg';

const ContactRow = () => {
	const { phoneNumber } = useSiteConfigHook();
	const { waLink, formattedNumber } = React.useContext(SiteContext);
	return (
		<>
			<a href={`tel:+351${phoneNumber}`} data-btn="navbarl-phone" target="_blank" class="cta icon-btn icon-btn-sm phone-icon-btn" aria-label='telefone'>
				<PhoneSvg size={24} />
			</a>
			<a href={`tel:+351${phoneNumber}`} data-btn="navbarl-phone-text" target="_blank" class="cta nav-phone-link"><u>{formattedNumber}</u></a>
		</>
	)
}

const NavbarLanding = () => {
	const { title } = useSiteConfigHook();

	return (
		<nav class="navbar">
			<div class="nav-first-row">
				<ContactRow />
			</div>
			<div class="nav-container">
				<div class="nav-logo">
					<RepairLogoSvg />
					<span>{title}</span>
				</div>
				<div class="nav-cta-desktop">
					<ContactRow />
				</div>
			</div>
		</nav>
	)
}

export default NavbarLanding;
