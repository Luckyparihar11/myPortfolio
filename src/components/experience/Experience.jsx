import React from "react";
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
           
            <h2 className="headi">
                My Skills
            </h2>
            <div className="container experience-container">
                <div className="experience-language">
                    <h3>Language/Programming</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>C,C++</h4>
                                <small className="text-light">Advanced</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Data Structure and Algorithm</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>React Js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Beginner</small>
                            </div>


                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Html,Css</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>
                      
                        
                    </div>
                </div>


                <div className="experience-tech">
                    <h3>Technology/Frameworks</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>JQuery</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Advanced</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>VS code</h4>
                                <small className="text-light">Basic</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Git and Github</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Canva</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Adobe Illustrator</h4>
                                <small className="text-light">Basic</small>

                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;