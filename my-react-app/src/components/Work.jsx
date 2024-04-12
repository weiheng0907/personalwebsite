import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CloseIcon from '@mui/icons-material/Close';


function Work(){


    return(
        <section id="work">
            <h2 style={{display:'flex', justifyContent: 'center', textDecoration: 'underline', textDecorationColor: 'white', padding: '20px'}}>Work Experience</h2>
                <VerticalTimeline lineColor='black'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="July 2022 - Feb 2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Project Manager & Product Specialist</h3>
                        <h4 className="vertical-timeline-element-subtitle">Simplified Technology</h4>
                        <ul>
                            <li>Managed over 600+ advertising screens’ weekly content.</li>
                            <li>Visiting sites and conducting technical testing in Hong Kong on behalf of the company</li>
                            <li>Managed over 15 website projects, including certain website upkeep, new website construction, and website redesign.</li>
                            <li>Demonstrated and presented our software solution on our company's behalf and provided training to clients.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        date="October 2020 – August 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Store Manager</h3>
                        <h4 className="vertical-timeline-element-subtitle" >Fucha Tasek (Bubble Tea Shop) </h4>
                        <ul>
                            <li>Managed the store's dairy operation and kept track of the inventory to ensure sure there were adequate quantities</li>
                            <li>Provided new employees with training to make sure they grasped the store's processes.</li>
                            <li>Obtain client input to enhance their experience.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        date="Jan 2020 – March 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Wholesale & Retail Business Owner</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ahlok's Enterprise</h4>
                        <ul>
                            <li>Managed internal employees by establishing and monitoring their schedules and ensuring that all dutieswere carried out quickly and effectively.</li>
                            <li>Spearheaded the company's social media marketing initiatives, promoting our products on Social Mediaand enhancing the company's online presence.</li>
                            <li>Monitored all parts of business operations and develop business strategies to meet the company'sobjectives.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<CloseIcon />}
                    />
                </VerticalTimeline>
        </section>

    );
    
};



export default Work;