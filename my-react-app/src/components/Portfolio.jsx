import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Portfolio(){


    return(
        <section id="portfolio">
            <h2 style={{display:'flex', textDecoration: 'underline', textDecorationColor: 'white', padding: '20px'}}>Education</h2>
                <VerticalTimeline lineColor='black'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="October 2022 – March2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science with Honors in Computing Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">Coventry University(Singapore)</h4>
                        <p>
                        Results: Waiting Final Result and Certification
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        date="October 2020 – July 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Diploma of information technology</h3>
                        <h4 className="vertical-timeline-element-subtitle" >PSB Academy(Singapore)</h4>
                        <p>
                        Results: 7A, 1B+, 1B
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        date="Jan 2014 - December 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Electrical & Electronics</h3>
                        <h4 className="vertical-timeline-element-subtitle">Foon Yew High School Kulai(Malaysia)</h4>
                        <p>
                        
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
        </section>

    );
    
};



export default Portfolio;