import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skillset from './Skillset';
import Contact from './Contact';
import Education from './Education';
import Footer from './Footer';

function App() {

  useEffect(() => {
    var canvas = document.getElementById('heroCanvas'),
        ctx = canvas.getContext('2d');

    // width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // the letters
    var letters = '100111011101010010101010101010010110011101110101001010101010101001010111111111111111000000000010011101110101001010101010101001010111111111111111000000000000111111111111111000000000000000001111111111111110000000000000000111111111111111000000000000111111111111111000000000000000';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 13,
        columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }

    const animationId = setInterval(draw, 33);

    return () => clearInterval(animationId);
  }, []);

  return (
    <div className="app-container">
<canvas
  id="heroCanvas"
  className="canvas-bg"
  style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
/>
      <Header />
      <Hero />
      <About />
      <Education />
      <Work />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
