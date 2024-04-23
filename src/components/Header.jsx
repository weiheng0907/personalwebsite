import React, { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleButtonClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const section = document.getElementById(activeSection);
    section.scrollIntoView({ behavior: 'smooth' });
  }, [activeSection]);

  return (
    <header>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('about')}>About</button>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('education')}>Education</button>
          </li>
          <li className={activeSection === 'work' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('work')}>Work Exp</button>
          </li>
          <li className={activeSection === 'skillset' ? 'active' : ''}>
            <button onClick={() => handleButtonClick('skillset')}>Skillsets</button>
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
