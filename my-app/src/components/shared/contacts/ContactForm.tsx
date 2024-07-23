"use client"

import { useState, FormEvent } from 'react';

interface ContactFormComponentProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormComponentProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    firstName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log('Email sent successfully');
      } else {
        console.log('Error sending email');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <section className='ContactForm'>
      <div className="gridConten">
        <div className="infoContactFrom">
          <h4>CONTACTO</h4>
          <p>Dejanos saber como podemos ayudarte, en breve te contactaremos.</p>
          <span>servicioalcliente@ecoret.com.co</span>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Nombre
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Telefono
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Correo
            <input
              type="text"
              name="email"
              placeholder="john@acme.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Cuentanos tu maravillosa idea
            <textarea
              name='message'
              placeholder="john@acme.com"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        <button type="button" id='close-button' onClick={onClose}>
          Cerrar
        </button>
      </div>
    </section>

  );
}

export default ContactForm;
