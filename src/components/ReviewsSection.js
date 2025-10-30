import * as React from "react"

import PhoneCtaBtn from '../components/PhoneCtaBtn.js';

const reviews = [
    {
	name: "Luís Silva",
	location: "Lagos",
	text: "Excelente serviço! Instalaram o meu AC novo de forma rápida e muito profissional. O técnico foi super cuidadoso com a limpeza no final. Recomendo a 100%. Preço justo pelo serviço prestado."
    },
    {
	name: "Carla Mendes",
	location: "Albufeira",
	text: "A minha avaria foi resolvida no mesmo dia que liguei. O técnico, Rui, foi muito simpático e explicou-me tudo direitinho. Já não passo calor! Obrigada pelo ótimo trabalho."
    },
    {
	name: "António Ferreira",
	location: "Portimão",
	text: "Bom serviço de manutenção. Foram pontuais e fizeram uma limpeza completa à minha unidade. Só não dou 5 estrelas porque o preço foi um bocado puxado, mas ficou tudo a funcionar perfeitamente."
    },
    {
	name: "Sofia Almeida",
	location: "Faro",
	text: "Já usei esta empresa para instalação e para uma reparação. São sérios, eficientes e o orçamento foi respeitado. Já recomendei aos meus vizinhos. É raro encontrar um serviço tão bom e de confiança."
    }
]

const Review = ({ text, name, location }) => {
    return (
	<div class="review-card">
	    <div class="review-content">
		<p class="review-text">"{text}"</p>
	    </div>
	    <div class="review-author">
		<div class="author-name">{name}</div>
		<div class="author-location">{location}</div>
	    </div>
	</div>
    )
}

const ReviewsSection = () => {
    let children = reviews.map(r => Review(r));
    return (
	<section id="reviews" class="reviews-section">
	    <div class="section-container">
		<h2 class="section-title">O Que Os Nossos Clientes Dizem</h2>
		<div class="reviews-grid">
		    {children}
		</div>
		<PhoneCtaBtn />
	    </div>
	</section>
    )
}

export default ReviewsSection;
