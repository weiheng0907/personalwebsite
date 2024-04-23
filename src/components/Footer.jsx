import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '20px' }}>
      <p style={{color:'white'}}>©{currentYear}. By Ooi Wei Heng. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
