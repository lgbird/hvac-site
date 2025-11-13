import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import RepairSvg from '../components/RepairSvg.js';
import WhatsAppBtn from '../components/whatsappBtn.js';
import './Navbar.css';

function toggleMenu() {
	const navMenu = document.querySelector('.nav-menu');
	if (window.innerWidth <= 768) {
		navMenu.classList.toggle('nav-menu-active');
	}
}

const Menu = ({ home }) => {
	if (home) return (
		<ul class="nav-menu" onClick={toggleMenu}>
			<a href="#quem-somos" class="nav-link"><li>Quem Somos</li></a>
			<a href="#servicos" class="nav-link"><li>Serviços</li></a>
			<a href="#contact" class="nav-link"><li>Contacto</li></a>
			<a href="#reviews" class="nav-link"><li>Avaliações</li></a>
		</ul>
	)
	else return (
		<ul class="nav-menu" onClick={toggleMenu}>
			<a href="#contact" class="nav-link"><li>Contacto</li></a>
			<a href="#reviews" class="nav-link"><li>Avaliações</li></a>
		</ul>
	)
}

const Navbar = ({ home = true }) => {
	const data = useStaticQuery(graphql`
	query {
	  site {
	    siteMetadata {
	      title
	    }
	  }
	}
      `)

	React.useEffect(() => {
		function handleDocumentClick(event) {
			const navContainer = document.querySelector('.nav-container');
			const navMenu = document.querySelector('.nav-menu');
			if (window.innerWidth > 768) return; // only apply on mobile

			if (navMenu && !navMenu.contains(event.target) && !navContainer.contains(event.target)) {
				navMenu.classList.remove('nav-menu-active');
			}
		}

		document.addEventListener('click', handleDocumentClick);

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);

	return (
		<>
			<nav class="navbar">
				<div class="nav-container">
					<div class="nav-logo">
						<RepairSvg />
						<span>{data.site.siteMetadata.title}</span>
					</div>
					<button class="nav-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<Menu home={home} />
				</div>
			</nav>
			<WhatsAppBtn />
		</>
	)
}

export default Navbar;
