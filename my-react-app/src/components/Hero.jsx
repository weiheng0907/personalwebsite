import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Initialising the canvas
    var canvas = document.getElementById('heroCanvas'),
        ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = '10011101110101001010101010101001010111111111111111000000000000111111111111111000000000000000';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 20,
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
    <section id="hero" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <canvas id="heroCanvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      <h1 style={{ zIndex: 1, position: 'relative', textAlign: 'center', marginTop: '0%', top: '50%'}}>Welcome to my personal website</h1>
    </section>
  );
}

export default Hero;
