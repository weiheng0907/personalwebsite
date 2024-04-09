import React from 'react';
import { useState } from 'react';


const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleButtonClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <ul>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('about')}>About</button>
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('portfolio')}>Portfolio</button>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
