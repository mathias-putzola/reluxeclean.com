// components/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCall = () => {
    window.location.href = 'tel:+33123456789';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique d'envoi du formulaire (par exemple, via une API)
    console.log(formData);
  };

  const sectionStyle = {
    backgroundColor: '#22353c',
    padding: '2rem 0',
    color: '#ffffff',
    textAlign: 'center' as 'center',
  };

  const buttonStyle = {
    backgroundColor: '#df2121',
    color: '#ffffff',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    marginBottom: '2rem',
    fontWeight: 'bold', 
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left' as 'left',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: 'none',
    color: 'black',
  };

  const submitButtonStyle = {
    backgroundColor: '#df2121',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold', 
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contactez-nous</h2>
      <button onClick={handleCall} style={buttonStyle}>
        Appeler 01 23 45 67 89
      </button>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            style={inputStyle}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            style={{ ...inputStyle, height: '150px' }}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" style={submitButtonStyle}>
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;