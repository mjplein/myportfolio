import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProjectExperience from './projexperience';
import Education from './education';
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
                                alt="matt" 
                            />
                        </div>
                        <h3 style={{ textAlign: 'center', paddingTop: '1em' }}>Matthew Plein</h3>
                        <br/>
                        <h5 style={{ textAlign: 'center' }}>Full Stack Web Developer</h5>
                        <p>Passion and enthusiasm for UI/UX/front-end design is what I bring forth with every project and team I work on. 
                            My determination and persistence at learning new methods and languages help to build remarkable web and 
                            mobile experiences for users. My years of education validate my passion for creativity and my years of work 
                            experience validate my exceptional communication and collaboration skills with coworkers and clients. 
                            Altogether, you have a passionate, enthusiastic, and purpose-driven front-end developer whose skills will 
                            always be improving!</p>
                        <hr style={{ borderTop: '3px solid #A8CABA', width: '100%' }}/>
                        <h3 style={{ textAlign: 'center', paddingTop: '1em' }}>Contact Me</h3>
                        <h5>Phone</h5>
                        <p>(612) 986-8405</p>
                        <h5>Email</h5>
                        <p>mjplein@gmail.com</p>
                        <h5>LinkedIn</h5>
                            <a href="https://www.linkedin.com/in/matthew-plein" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" style={{ fontSize: '30px' }}/>
                            </a>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3 style={{ textAlign: 'center' }}>Project Experience</h3>
                        <ProjectExperience
                            projURL="https://www.setaswall.com/wp-content/uploads/2017/05/Minimalist-Wallpaper-24-1620-x-2880.jpg"
                            projName="Hoook"
                            projRole="Front-End Developer"
                            projDescription1="•	Hoook is a social, media-based application where users can put other users “on the hook” to check out selected media such as movies, tv, music, books, and games"
                            projDescription2="•	Technologies used: HTML, CSS, JavaScript, AJAX, Bootstrap, ReactJS, jQuery, SQL, Node.js, PHP, Express, Sequelize"
                            projDescription3="http://hoook.me"
                        />
                        <ProjectExperience
                            projURL="https://r.hswstatic.com/w_907/gif/podcasts/missedinhistory-podcasts-wp-content-uploads-sites-99-2015-09-Lisztomania-P-660x357.jpg"
                            projName="Liszt-Worthy"
                            projRole="Full-Stack Developer/Project Manager"
                            projDescription1="•	Liszt-Worthy is a music discovery application that lets users search for an artist or song and returns a list of artists or songs that are similar"
                            projDescription2="•	Technologies used: HTML, CSS, JavaScript, AJAX, Bootstrap, jQuery, Firebase, Node.js"
                            projDescription3="https://liszt-worthy.herokuapp.com/index.html"
                        />
                        <ProjectExperience
                            projURL="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Zhwp_Question_Mark.svg/768px-Zhwp_Question_Mark.svg.png"
                            projName="Clicks of Doom"
                            projRole="Sole Developer"
                            projDescription1="•	Clicks of Doom is a game where the user must click each image on the board only once and each time an image is clicked, the board shuffles"
                            projDescription2="•	Technologies used: HTML, CSS, JavaScript, ReactJS, Node.js"
                            projDescription3="https://mjplein.github.io/clicksofdoom/"
                        />
                        <hr style={{ borderTop: '3px solid #A8CABA', width: '100%' }}/>
                        <h3 style={{ textAlign: 'center' }}>Education</h3>
                        <Education
                            schoolURL="https://www.csl.edu/wp-content/uploads/2017/10/concordia-saint-paul-logo.png"
                            schoolName="Concordia University"
                            schoolDescription1="•	Currently enrolled to complete BS in Computer Science"
                        />
                        <Education
                            schoolURL="https://destinysolutions.com/wp-content/uploads/2016/07/University_of_Minnesota_wordmark.png"
                            schoolName="University of Minnesota"
                            schoolDescription1="•	Coding Bootcamp Graduate"
                            schoolDescription2="•	Received certificate in Full-Stack Web Development"
                        />
                        <Education
                            schoolURL="http://www.devicepitstop.com/maple-grove/wp-content/uploads/sites/14/2017/08/Logo-ARCC2.png"
                            schoolName="Anoka-Ramsey Community College"
                            schoolDescription1="•	Earned credits toward BA in Accounting"
                        />
                        <Education
                            schoolURL="https://www.votchildren.org/uploads/2/1/4/7/21476974/1311431_orig.png"
                            schoolName="McNally Smith School of Music"
                            schoolDescription1="•	Earned credits toward BA in Guitar Performance"
                        />
                        <Education
                            schoolURL="http://www4.clcmn.edu/wp-content/uploads/2015/03/CLC_HorizontalLogo_W-CentralLakesCollege_RGB_chris.gif"
                            schoolName="Central Lakes College"
                            schoolDescription1="•	Earned credits toward BA in Liberal Arts"
                        />
                        <Education
                            schoolURL="https://www.bemidjistate.edu/academics/departments/professional-education/fastrack/wp-content/uploads/sites/14/2016/01/BSU-Logo.png"
                            schoolName="Bemidji State University"
                            schoolDescription1="•	Earned credits toward BA in Liberal Arts"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;