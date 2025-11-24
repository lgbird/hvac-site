import * as React from "react"

import CtaBtn from '../components/CtaBtn.js';
import './ReviewsSection.css';

const reviews = [
	{
		name: "Luís Silva",
		location: "Lisboa",
		text: "Técnico muito competente. Veio no próprio dia, diagnosticou e resolveu de imediato. Excelente profissional"
	},
	{
		name: "Carla Mendes",
		location: "Lisboa",
		text: "A minha máquina deixou de centrifugar e em duas horas estava arranjada. Preço justo e serviço super rápido, recomendo!"
	},
	{
		name: "António Ferreira",
		location: "Cascais",
		text: "Foi o técnico que me atendeu mais rapidamente. Repararam no dia e ficou perfeito"
	},
	{
		name: "Sofia Almeida",
		location: "Mafra",
		text: "Cumpren o que prometen. Contactei de manhã e à tarde estava tudo resolvido. Cinco estrelas!"
	},
	{
		name: "Tomás Ribeiro",
		location: "Odivelas",
		text: "Atendimento fantástico e resolução de problemas na hora. É raro encontrar um serviço tão eficiente. Voltarei a contactar sem dúvida"
	},
	{
		name: "Pedro Pinto",
		location: "Carregado",
		text: "O técnico explicou-me o problema, deu o orçamento e arranjou tudo no local. Muito transparente e eficaz"
	},
]

const Review = ({ text, name, location }) => {
	return (
		<div class="review-card">
			<div class="review-content">
				<p class="review-stars">⭐ ⭐ ⭐ ⭐ ⭐</p>
				<p class="review-text">"{text}"</p>
			</div>
			<div class="review-author">
				<div class="author-name">{name}</div>
				<div class="author-location">{location}</div>
			</div>
		</div>
	)
}

const ReviewsSection = ({ waLink }) => {
	let children = reviews.map(r => Review(r));
	return (
		<section id="reviews" class="reviews-section section">
			<div class="section-container">
				<h2 class="section-title">O Que Os Nossos Clientes Dizem</h2>
				<div class="reviews-grid">
					{children}
				</div>
				<CtaBtn waLink={waLink} />
			</div>
		</section>
	)
}

export default ReviewsSection;
