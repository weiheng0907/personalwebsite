import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Work from './Work';
import Skillset from './Skillset';
import Contact from './Contact';

function App() {

  useEffect(() => {
    // Initialising the canvas
    var canvas = document.getElementById('heroCanvas'),
        ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = '100111011101010010101010101010010110011101110101001010101010101001010111111111111111000000000010011101110101001010101010101001010111111111111111000000000000111111111111111000000000000000001111111111111110000000000000000111111111111111000000000000111111111111111000000000000000';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 16,
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
      <canvas id="heroCanvas" className="canvas-bg" />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Work />
      <Skillset />
      <Contact />
    </div>
  );
}

export default App;
