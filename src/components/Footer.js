import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import './Footer.css';
import RepairSvg from "./RepairSvg.js";
import { StaticImage } from "gatsby-plugin-image";

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
								<span class="contact-label">WhatsApp:</span>
								<a href={`tel:+351${phoneNumber}`} class="footer-link">+351 {formattedNumber}</a>
							</div>
							<div class="contact-item">
								<span class="contact-label">Telefone:</span>
								<a href={`tel:+351${phoneNumber}`} class="footer-link">+351 {formattedNumber}</a>
							</div>
						</div>
					</div>
					<div class="footer-copyright">
						<div>
							<a href="/politica-privacidade" target="_blank" class="footer-link">Politica de Privacidade</a>
							<span> | </span>
							<a href="/politica-cookies" target="_blank" class="footer-link">Politica de Cookies</a>
						</div>
						<a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank">
							<StaticImage src="../images/livro_reclamacoes.webp" />
						</a>
						<p>&copy; 2024 {data.site.siteMetadata.title}. Todos os direitos reservados.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
