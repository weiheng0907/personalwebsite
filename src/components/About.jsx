import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import whpic from '../assets/whpic.jpg';




function About (){
   

    return (
        <section id="about">
        <div className='row'></div>
        <h2 style={{ color: '#31F400', padding: '20px', paddingBottom: '1px',borderBottom: '2px solid white', marginBottom:'20px' }}>About Me</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: '250px', height: '350px' }} src={whpic}  alt="Profile" />
          </Grid>
          <Grid item xs={12} md={6} style={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
            <p style={{ fontSize: '24px' }}>Ooi Wei Heng</p>
            <p style={{ fontSize: '20px' }}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
              <p>Birthday: 07 September 2001</p>
              <p>Nationality: Malaysian</p>
              <p>Phone Numbers: +65xxxxxxxx / +60187899958</p>
              <p>Email: ooiwh0907@gmail.com</p>
            </div>
          </Grid>
        </Grid>
      </section>
    );
}

export default About;