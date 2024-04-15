import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id='contact' className='row'>
      <div className='col-md-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '750px', background: 'rgba(66, 253, 0, 0.5)', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}>
          <h2 className='section-heading' style={{ marginBottom: '20px', textAlign: 'center', color:'White', fontWeight:'bold' }}>Contact Me</h2>
          <div className="form-group">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', background:'#B2C6AC',borderRadius: '5px', border: 'none', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)' }}
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
              style={{ width: '100%', padding: '10px', marginBottom: '15px', background:'#B2C6AC', borderRadius: '5px', border: 'none', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)' }}
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
              style={{ width: '100%', padding: '10px', background:'#B2C6AC', marginBottom: '20px', borderRadius: '5px', border: 'none', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)' }}
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none',transition: 'background 0.3s, color 0.3s', background: 'black', color: 'white', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
