import React from "react";
import './footer.css';
import {FiInstagram} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import CV from '../../assets/cv.pdf';


const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className="foot-logo">KARTIKAY</a> */}
            <a href={CV} download className='btn btn-primary foot-logo'>Download CV</a>
            <ul className="permalink">
             
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#Services">Coding Profile</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href='https://www.instagram.com/_lucky_parihar/' target="_blank" rel="noreferrer"><FiInstagram/></a>
                <a href='https://www.linkedin.com/in/lucky-parihar-b90425208/' target="_blank" rel="noreferrer"><GrLinkedin/></a>
                <a href='https://github.com/Luckyparihar11' target="_blank" rel="noreferrer"><AiFillGithub/></a>
            </div>
            <div className="footer-copyright">
                <small className="cc">
                    &copy; React-JS Portfolio. All rights Reserved.
                </small>
            </div>
        </footer>
    );

    
}
export default Footer;