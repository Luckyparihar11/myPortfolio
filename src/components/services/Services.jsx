import React from "react";
import './services.css';
import { SiHackerrank } from 'react-icons/si'
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
const Service = () => {
    return (
        <section id="Services">
            <h2 className="perform">
                Coding Profile:
            </h2>
            <div className="container code">
                <div className="coding-head">
                    <SiHackerrank className='icon-c' />
                    <a href="https://www.hackerrank.com/pariharlucky41" rel="noreferrer" target="_blank" className="l-edit">HackerRank</a>
                    <small className="up-dist">
                        <p>
                            1. Solved 100+ Problems.
                            <br/>
                            2. 4⭐at Hackerrank.
                        </p>
                    </small>
                </div>

                {/* <div className="coding-head">
                    <SiCodechef className='icon-c' />
                    <a href="https://www.codechef.com/users/kartikay_12345" target="_blank" className="l-edit">Codechef</a>
                    <small className="up-dist">
                        <p>
                            1. 4⭐at Codechef.
                            <br/>  
                            2. Max. Rating is 1818.
                        </p>
                    </small>
                </div> */}

                <div className="coding-head">
                    <SiLeetcode className='icon-c' />
                    <a href="https://leetcode.com/Paradox_2003/" rel="noreferrer" target="_blank" className="l-edit">Leetcode</a>
                    <small className="up-dist">
                        <p>
                            1. Solved 10+ Problems.
                            <br/>
                            2. 1⭐ at Leetcode.
                        </p>
                    </small>
                </div>
                <div className="coding-head">
                    <SiGeeksforgeeks className='icon-c' />
                    <a href="https://github.com/Luckyparihar11" target="_blank" className="lgfg-edit">Geeks</a>
                    <small className="up-dist">
                        <p>
                        1. Solved 50+ Problems.
                          <br/>
                        2. Problem Solving  
                        </p>
                    </small>
                </div>
            </div>


        

        </section>
    );
}
export default Service;
