import React, { useState, useEffect } from 'react';
import './ContactSection.css';

const ContactSection = () => {
const [formRes, setFormRes] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setFormRes(params.get('form'));
    }
  }, []);

  return (
	<section id="contact" class="reviews-section">
	    <div class="section-container">
		<h2 class="section-title">Contate-nos</h2>
                {formRes === 'success' && <div className="contact-form">
                  <div className="message success">
                    Obrigado! Entraremos em contacto em breve
                  </div>
                </div>}
                {formRes === 'error' && <div className="contact-form">
                  <div className="message error">
                    Ups... algo correu mal! Por favor, recarrega a página e tenta novamente
                  </div>
                </div>}
                  <form 
                    className="contact-form" 
                    method="POST" 
                    action="/api/contact"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="nome"
                        required
                        placeholder="Nome"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone"
                        name="telefone"
                        placeholder="Telefone"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        id="message"
                        name="mensagem"
                        rows="5"
                        placeholder="Mensagem"
                      />
                    </div>

                    <button type="submit" className="cta-button" style={{width: "100%"}}>Enviar</button>
                  </form>
            </div>
      </section>
  );
};

export default ContactSection;
