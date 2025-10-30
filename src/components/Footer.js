import * as React from "react"

import VentilatorSvg from '../components/VentilatorSvg.js';

const Footer = () => {
    return (
	<footer class="footer">
	    <div class="container">
		<div class="footer-content">
		    <div class="footer-info">
			<div class="nav-logo">
			    <VentilatorSvg />
			    <span>ClimAlgarve</span>
			</div>
			<div class="footer-contact">
			    <div class="contact-item">
				<span class="contact-label">Telefone:</span>
				<a href="tel:+351211234567" class="contact-link">+351 211 234 567</a>
			    </div>
			</div>
		    </div>
		    <div class="footer-copyright">
			<p>&copy; 2024 ClimaAlgarve. Todos os direitos reservados.</p>
		    </div>
		</div>
	    </div>
	</footer>
    )
}

export default Footer;
