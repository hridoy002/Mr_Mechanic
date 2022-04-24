import React from 'react';
import hridoy from '../../images/hridoy.JPG'
import './About.css'
const About = () => {
    return (
        <div className='container about'>
            <h2>About Me</h2>
            <div className="square">
                <div>
                    <img src={hridoy} alt="" />
                </div>


                <p> <b>INTRODUCTION: </b>Hi! I am Mohammad Hridoy Ahmmed.I born in 20 April in Brahmanbaria.Brahmanbaria is also my origin.I live in now Mymensingh.
                </p>
                <p><b>EDUCATION:</b> I passed SSC with Science from Mukul Niketon High School,Mymensingh <br />
                and passed HSC from Advanced Residential Model College,Mymensingh.
                Complete graduation from Nothern University Bangladesh in Computer Science and Engineering.
                </p>
            </div>

        </div>
    );
};

export default About;