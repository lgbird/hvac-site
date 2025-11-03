import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');

    if (status === 'success') {
      return (
        <div className="contact-form">
          <div className="message success">
            Thank you! Your message has been sent successfully.
          </div>
        </div>
      );
    }

    if (status === 'error') {
      return (
        <div className="contact-form">
          <div className="message error">
            Sorry, there was an error sending your message. Please try again.
          </div>
        </div>
      );
    }
  }

  return (
	<section id="contact" class="reviews-section">
	    <div class="section-container">
		<h2 class="section-title">Contate-nos</h2>
                  <form 
                    className="contact-form" 
                    method="POST" 
                    action="/api/contact"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
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
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        placeholder="Message"
                      />
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                  </form>
            </div>
      </section>
  );
};

export default ContactSection;
