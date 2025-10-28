import * as React from "react"

const Footer = () => {
    return (
	<footer class="footer">
	    <div class="container">
		<div class="footer-content">
		    <div class="footer-info">
			<h3 class="footer-logo">Climatização Total</h3>
			<div class="footer-contact">
			    <div class="contact-item">
				<span class="contact-label">Telefone:</span>
				<a href="tel:+351211234567" class="contact-link">+351 211 234 567</a>
			    </div>
			    <div class="contact-item">
				<span class="contact-label">Email:</span>
				<a href="mailto:geral@artificesportugal.pt" class="contact-link">geral@artificesportugal.pt</a>
			    </div>
			</div>
		    </div>
		    <div class="footer-copyright">
			<p>&copy; 2024 Climatização Total. Todos os direitos reservados.</p>
		    </div>
		</div>
	    </div>
	</footer>
    )
}

export default Footer;
