import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolder} from 'react-icons/ai';



const About = () => {
    return (
        <section id="about">
          
            <h2 className="hey">
                About me
            </h2>
            <div className="conatiner about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt=" About image" className='edit' />
                    </div>

                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                        <RiAwardFill className='about-icon'/>
                        <h4>Responsibility</h4>
                        <small>Operation Head At JLUG-JEC</small>
                        </article>

                        <article className="about-card">
                        <FiUsers className='about-icon'/>
                        <h4>Coding Profile</h4>
                        <small>Solved 100+ Cpp problems</small>
                        </article>

                        <article className="about-card">
                        <AiFillFolder className='about-icon'/>
                        <h4>Projects</h4>
                        <small>5+ Frontend Projects and 50+ Poster Designing Projects</small>
                        </article>

                    </div>
                    <p>
                    Hey, Lucky Parihar this side, I'm an Electronics and Communication engineering student of Jabalpur Engineering College. I have keen intrerest in learning new technologies and working upon various projects. I'm an dedicated and determined person who completes the given task within time. State level Footballer, Leading Managament team in various Events.  Looking Forward to get the industrial exposure and gain some good experiences by contributing for the company with my full proficiency.
                    
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;
