import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [emailSent, setEmailSent] = useState(false);

  const serviceId ='service_13iwpry';
  const templateId = 'template_ybn1cx9';
  const publicKey = 'ixvW971hfDVU-8jQ8'; //should use gitignore method to hide the public key, will do on next version

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setEmailSent(true);
        // after sent the email reset the form data
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <section id='contact' className='row'>
      <div className='col-md-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h2 className='section-heading'>Contact Me</h2>
          <div className="form-group">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='contact-field'
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='contact-field'
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='contact-field'
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {emailSent && <p className='success-message'>Email sent successfully!</p>}
      </div>
    </section>
  );
};

export default Contact;
