import React, { useState, useEffect } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          "PARAMS": Object.fromEntries(new URLSearchParams(window.location.search).entries()),
          p: window.location.pathname,
          ref: document.referrer
        })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setFormStatus('success');
        setFormState({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" class="section">
      <div class="section-container contact-section">
        <div class="contact-form-container">
          <h2 class="section-title">Contacte-nos</h2>
          <p class="section-text">Tem pressa? Deixe-nos uma mensagem e entraremos em contacto o mais breve possível</p>
          {formStatus === 'success' && (
            <div className="contact-form">
              <div className="message success">Obrigado! Entraremos em contacto em breve</div>
            </div>
          )}
          {formStatus === 'error' && (
            <div className="contact-form">
              <div className="message error">
                Ups... algo correu mal! Por favor, recarrega a página e tenta novamente
              </div>
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="nome"
                value={formState.nome}
                onChange={handleChange}
                required
                placeholder="Nome"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="telefone"
                value={formState.telefone}
                onChange={handleChange}
                placeholder="Telefone"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="mensagem"
                value={formState.mensagem}
                onChange={handleChange}
                rows="5"
                placeholder="Mensagem"
              />
            </div>

            <button type="submit" className="cta-button" style={{ width: "100%" }}>Enviar</button>
          </form>
        </div>
      </div>
    </section >
  );
};

export default ContactSection;
