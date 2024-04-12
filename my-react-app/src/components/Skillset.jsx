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
            <h2 style={{display:'flex', justifyContent: 'center', textDecoration: 'underline', textDecorationColor: 'white', padding: '20px'}}>Skillsets</h2>
            <div style={{display:'flex', justifyContent:'Center', background:"rgba(66,253,0,0.5)", borderRadius:"50px", padding: '25px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} minHeight={160}>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><FaPython style={{color:'#4584B6',width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><IoLogoJavascript style={{color:'yellow', width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><FaNode  style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><FaReact style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><FaWordpress style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>

                </Grid>
                <Grid container spacing={2} minHeight={160}>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><FaHtml5 style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><FaCss3Alt style={{color:'blue',width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><TbApi style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><SiPostgresql style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ width: 125, height: 125 }}><SiMysql  style={{width:' 100px', height:'100px'}} /></Avatar> 
                    </Grid>
                </Grid>
            </Box>
            </div>
            

        </section>

    );
    
};



export default Skillset;