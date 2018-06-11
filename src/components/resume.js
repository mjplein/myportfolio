import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import mattPic from '../images/matt.jpg';


class Resume extends Component {
    render() {
        return(
            <div className="resume-page">
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center', paddingTop: '2em' }}>
                            <img 
                                className="resume-pic" 
                                src={mattPic} 
                                alt="avatar" 
                            />
                        </div>
                        <h2 style={{ paddingTop: '1em' }}>Matthew Plein</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <p>What better way is there to foster one’s passion for creativity and design then with web development? I am a recent coding boot camp graduate and am currently pursuing my BA in Computer Science. My aim is to take the exceptional communication skills I've gained over 10+ years of business experience, blend together my passion for creativity and design, and be part of a team that strives to develop remarkable experiences for web and mobile users.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <h5 style={{ color: 'grey' }}>Address</h5>
                        <p>979 Monterey Drive, Shoreview, MN 55126</p>
                        <h5 style={{ color: 'grey' }}>Phone</h5>
                        <p>(612) 986-8405</p>
                        <h5 style={{ color: 'grey' }}>Email</h5>
                        <p>mjplein@gmail.com</p>
                        <h5 style={{ color: 'grey' }}>Web</h5>
                        <p>myportfolio.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="Concordia University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Education
                            startYear={2003}
                            endYear={2004}
                            schoolName="McNally Smith School of Music"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Education
                            startYear={2002}
                            endYear={2003}
                            schoolName="Central Lakes College"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Education
                            startYear={2001}
                            endYear={2002}
                            schoolName="Bemidji State University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2014}
                            endYear={2018}
                            jobName="PreferredOne Insurance Company"
                            jobTitle="Account Manager"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2013}
                            jobName="Wells Fargo"
                            jobTitle="Operations Processor"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Experience
                            startYear={2011}
                            endYear={2012}
                            jobName="American Family Insurance Company"
                            jobTitle="Claims Adjuster"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Experience
                            startYear={2008}
                            endYear={2011}
                            jobName="Allianz Life"
                            jobTitle="New Business Case Manager"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML"
                            progress={80}
                        />
                        <Skills
                            skill="CSS"
                            progress={80}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills
                            skill="ReactJS"
                            progress={30}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={40}
                        />
                        <Skills
                            skill="Guitar"
                            progress={65}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;