import * as React from "react"

import VentilatorSvg from '../components/VentilatorSvg.js';
import WhatsAppBtn from '../components/whatsappBtn.js';

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
	    <a href="#como-funciona" class="nav-link"><li>Como Funciona</li></a>
	    <a href="#porque-nos" class="nav-link"><li>Porque Nós</li></a>
	    <a href="#contacto" class="nav-link"><li>Contacto</li></a>
	</ul>
    )
    else return (
	<ul class="nav-menu" onClick={toggleMenu}>
	    <a href="#reviews" class="nav-link"><li>Avaliações</li></a>
	    <a href="#" class="nav-link"><li>Contacto</li></a>
	</ul>
    )
}

const Navbar = ({ home = true }) => {
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
			<VentilatorSvg />
			<span>Climatização Algarve</span>
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
