import React, { useEffect } from 'react';
import Typed from 'typed.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


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

  return (
    <section id="hero" className="text-white">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="hero-content text-center">
              <h1>Welcome to my website <br /> I'm Ooi Wei Heng</h1>
              <p>I'm Into <span ref={el} /></p>
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://www.linkedin.com/in/weiheng0907/" className="me-2">
                  <FaLinkedin  style={{color:'#0077b5',  width:'40px', height:'40px'}}/>
                </a>
                <a href="https://github.com/weiheng0907">
                  <FaGithub style={{color:'#000',  width:'40px', height:'40px'}}/>
                </a>
              </div>
              <button className="btn btn-success mt-4"> <span className="text-white">Explore</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}     

export default Hero;
