import React, { useEffect } from 'react';
import Typed from 'typed.js'


function Hero (){

  const el = React.useRef(null);
  const strings = ["Developer", "Software Engineer"]

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings.map(
        item =>
          `<span style='color: #42FD00; text-decoration: underline; text-decoration-color: #3BAC13;'>${item}</span>`,
      ),
      typeSpeed: 65,
      backSpeed: 65,
      cursorChar: '<span style="color: #;">|</span>',
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);


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
    <section id="hero">
      <canvas id="heroCanvas" />
      <div className="hero-content"> 
        <h1>Welcome to my website <br /> I'm Ooi Wei Heng</h1>
        <p>I'm Into <span ref={el} /></p>
        <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
          <a href="https://www.linkedin.com/in/weiheng0907/">
            <img src="../assets/linkedin-icon.webp" alt="Linkedin" />
          </a>
          <a href="https://github.com/weiheng0907">
            <img src="../assets/github-icon.jpg" alt="Github" />
          </a>
        </div>
        <button style={{ border:'0', marginTop:'20px', padding:'10px 20px', fontSize:'18px', background: 'rgba(88, 217, 28, 0.5)'}}> <span  style={{ color:'white'}}>Explore</span></button>
      </div>
    </section>
  );
}     

export default Hero;
