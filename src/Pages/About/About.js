import React from 'react';
import hridoy from '../../images/hridoy2.png'
import './About.css'
const About = () => {
    return (
        <div className='container about'>
            <h2>About Me</h2>
            <div className="square">
                <div>
                    <img src={hridoy} alt="" />
                </div>


                <p> <b>INTRODUCTION: </b>Hi! I am Mohammad Hridoy Ahmmed.I born  20 April,1997 in Brahmanbaria.Brahmanbaria is also my origin.I live in now Mymensingh.
                </p>
                <p><b>EDUCATION:</b> I passed SSC with Science from Mukul Niketon High School,Mymensingh <br />
                and passed HSC from Advanced Residential Model College,Mymensingh.
                Complete graduation from Nothern University Bangladesh in Computer Science and Engineering.
                </p>
                <p><b>Hobby:</b> I like to play Cricket.It's my passion. Besides,spending time with friends and travelling also I like most.
                </p>
                <p><b>Skill:</b>I know Wordpress customizing and a little bit  developing.And now I am learnig Frontend developing.Though Its a tough experience but I try to give my best.</p>
            </div>

        </div>
    );
};

export default About;