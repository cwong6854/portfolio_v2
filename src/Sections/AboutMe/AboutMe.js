import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import resume from "../../assets/images/CURTIS_WONG_RESUME.pdf";

const AboutMe = (props) => {
    return (
        <section id='about' className="spotlight style1 orient-right content-align-left onscroll-image-fade-in">

            <div className='content'>
                <h1 className='content-description'>About Me</h1>
                <p className='content-description'>Hello! I am a proud first-generation college student of immigrant parents originally from San Francisco, CA majoring in Data Science and Economics at UC Berkeley with an emphasis in Computer Science currently breaking into tech and pursuing roles in software/IT, engineering and data science. Through utilizing software and engineering tools, I strive to contribute my knowledge and skillsets to improve modern-day technology and to help innovate products and make an impact on the world.</p>
                <div className='content-links'>
                    <ul className="icons">
                        <li><a className='icon-text' href={resume} target={'_blank'}><FontAwesomeIcon icon={faUserCircle} size='2x'/>Resume</a></li>
                        <li><a className='icon-text' href='https://www.linkedin.com/in/curtiswong990/' target={'_blank'}><FontAwesomeIcon icon={faLinkedin} size='2x'/>LinkedIn</a></li>
                        <li><a className='icon-text' href='https://github.com/cwong6854' target={'_blank'}><FontAwesomeIcon icon={faGithub} size='2x'/>GitHub</a></li> 
                    </ul>
                </div>
            </div>
            <img className='image' src={props.img} alt=''/>
            
        </section>
    )
}

export default AboutMe;