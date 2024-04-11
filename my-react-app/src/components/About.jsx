import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';



function About (){
   

    return (
        <section id="about" style={{background:'darkgrey'}}>
            <h2 style={{display:'flex', textDecoration: 'underline', textDecorationColor: 'white', padding: '20px'}}>About Me</h2>
            <Box sx={{ flexGrow: 0.5}}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8} style={{display:'flex', justifyContent:'center'}} >
                <img style={{ width:'250px', height:'350px'}}src='../assets/whpic.jpg' />
                </Grid>
                <Grid xs={8} style={{color: 'white', display:'flex', justifyContent:"space-evenly", flexDirection:'column'}}>
                    <p style={{fontSize:'24px'}}>Ooi Wei Heng</p>
                    <p style={{fontSize:'20px'}}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </p>
                    <div style={{display:'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr', gridTemplateRows: '4fr 4fr'}}>
                        <p style={{gridColumnStart: 'span 2'}}>Birthday: 07 September 2001</p>
                        <p style={{gridColumnStart: 'span 2'}}>Nationality: Malaysian</p>
                        <p style={{gridColumnStart: 'span 2'}}>Phone Numbers: +65xxxxxxxx/+60187899958</p>
                        <p style={{gridColumnStart: 'span 2'}}>Email: ooiwh0907@gmail.com</p>
                    </div>
                    </Grid>
                </Grid>
                </Box>
        </section>
    );
}

export default About;