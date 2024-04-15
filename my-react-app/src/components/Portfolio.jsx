import React from 'react';



function Portfolio(){


    return(
        <section id="portfolio">
            <h2 style={{ display: 'flex', color: '#31F400', borderBottom: '2px solid white', padding: '20px', paddingBottom: '1px', marginBottom:'20px'}}>Education</h2>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <div className='container'>
                    <div className='row'>
                        <div style={{width:'100%'}}>
                       
                        <ul className='list-group'>
                            <li className='list-group-item' style={{borderTop:'0', background:'#3E792F', color:'#000', borderTopLeftRadius:'0'}}>
                            <h3 className="vertical-timeline-element-title">Bachelor of Science with Honors in Computing Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">Coventry University(Singapore) October 2022 – March2024</h4>
                            <p>Results: Waiting Final Result and Certification</p>
                            </li>
                            <li className='list-group-item' style={{background:'#6DD054', color:'#000'}}>
                            <h3 className="vertical-timeline-element-title">Diploma of Information Technology</h3>
                            <h4 className="vertical-timeline-element-subtitle">PSB Academy(Singapore) October 2020 – July 2021</h4>
                            <p>Results: 7A, 1B+, 1B</p>
                            </li>
                            <li className='list-group-item' style={{background:'#B2C6AC', color:'#000'}}>
                            <h3 className="vertical-timeline-element-title">Electrical & Electronics</h3>
                            <h4 className="vertical-timeline-element-subtitle">Foon Yew High School Kulai(Malaysia) Jan 2014 - December 2019</h4>
                            <p>Results: </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

    );
    
};



export default Portfolio;