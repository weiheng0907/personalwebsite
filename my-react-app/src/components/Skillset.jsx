import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaNode, FaReact, FaWordpress } from "react-icons/fa";
import { SiPostgresql, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { TbApi } from "react-icons/tb";
import Grid from '@mui/material/Unstable_Grid2';


function Skillset(){


    return(
        <section id="skillset">
            <h2 className='section-heading'>Skillsets</h2>
            <div className='skillset-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent="space-evenly" minHeight={160}>
                <Grid item xs={6} sm={3} md={2} className="avatar-container">
                    <Avatar sx={{width: 125, height: 125}}><FaPython style={{color:'#4584B6',width:' 80%', height:'80%'}} /></Avatar> 
                </Grid>
                <Grid item xs={6} sm={3} md={2} className="avatar-container">
                    <Avatar sx={{width: 125, height: 125}}><IoLogoJavascript style={{color:'yellow', width:' 80%', height:'80%'}} /></Avatar> 
                </Grid>
                <Grid item xs={6} sm={3} md={2} className="avatar-container">
                    <Avatar sx={{width: 125, height: 125}}><FaNode  style={{width:' 80%', height:'80%'}} /></Avatar> 
                </Grid>
                <Grid item xs={6} sm={3} md={2} className="avatar-container">
                    <Avatar sx={{width: 125, height: 125}}><FaReact style={{width:' 80%', height:'80%'}} /></Avatar> 
                </Grid>
                <Grid item xs={6} sm={3} md={2} className="avatar-container">
                    <Avatar sx={{width: 125, height: 125}}><FaWordpress style={{width:' 80%', height:'80%'}} /></Avatar> 
                </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="space-evenly" minHeight={160}>
                    <Grid item xs={6} sm={3} md={2} className="avatar-container">
                        <Avatar sx={{width: 125, height: 125}}><FaHtml5 style={{width:' 80%', height:'80%'}} /></Avatar> 
                    </Grid>
                    <Grid item xs={6} sm={3} md={2} className="avatar-container">
                        <Avatar sx={{width: 125, height: 125}}><FaCss3Alt style={{color:'blue',width:' 80%', height:'80%'}} /></Avatar> 
                    </Grid>
                    <Grid item xs={6} sm={3} md={2} className="avatar-container">
                        <Avatar sx={{width: 125, height: 125}}><TbApi style={{width:' 80%', height:'80%'}} /></Avatar> 
                    </Grid>
                    <Grid item xs={6} sm={3} md={2} className="avatar-container">
                        <Avatar sx={{width: 125, height: 125}}><SiPostgresql style={{width:' 80%', height:'80%'}} /></Avatar> 
                    </Grid>
                    <Grid item xs={6} sm={3} md={2} className="avatar-container">
                        <Avatar sx={{width: 125, height: 125}}><SiMysql  style={{width:' 80%', height:'80%'}} /></Avatar> 
                    </Grid>
                </Grid>
            </Box>
            </div>
            

        </section>

    );
    
};



export default Skillset;