import * as React from "react"

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  if (window.innerWidth <= 768) {
    navMenu.classList.toggle('nav-menu-active');
  }
}


const NavbarLanding = () => {
	return (
		 <nav class="navbar">
			<div class="nav-container">
			    <div class="nav-logo">Climatização Total</div>
			    <button class="nav-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			    </button>
			    <ul class="nav-menu" onClick={toggleMenu}>
				<li><a href="#reviews" class="nav-link">Avaliações</a></li>
				<li><a href="#" class="nav-link">Contacto</a></li>
			    </ul>
			</div>
		</nav>
	)
}

export default NavbarLanding;
