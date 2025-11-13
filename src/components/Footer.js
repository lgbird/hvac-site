import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import './Footer.css';
import RepairSvg from "./RepairSvg.js";

const Footer = () => {
	const data = useStaticQuery(graphql`
	query {
	  site {
	    siteMetadata {
	      title
	    }
	  }
	}
      `)
	let phoneNumber = process.env.GATSBY_PHONE_NUMBER;
	let formattedNumber = phoneNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
	return (
		<footer class="footer">
			<div class="container">
				<div class="footer-content">
					<div class="footer-info">
						<div class="nav-logo">
							<RepairSvg />
							<span>{data.site.siteMetadata.title}</span>
						</div>
						<div class="footer-contact">
							<div class="contact-item">
								<span class="contact-label">Telefone:</span>
								<a href={`tel:+351${phoneNumber}`} class="contact-link">+351 {formattedNumber}</a>
							</div>
						</div>
					</div>
					<div class="footer-copyright">
						<p>&copy; 2024 {data.site.siteMetadata.title}. Todos os direitos reservados.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
