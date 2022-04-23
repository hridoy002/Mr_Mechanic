import React from 'react';
import hridoy from '../../images/hridoy.JPG'
import './About.css'
const About = () => {
    return (
        <div className='container about'>
            <h2>About Me</h2>
            <div class="square">
                <div>
                    <img src={hridoy} alt="" />
                </div>


                <p> <b>INTRODUCTION: </b>Hi! I am Mohammad Hridoy Ahmmed.I born in 20 April in Brahmanbaria.Brahmanbaria is also my origin.I live in now Mymensingh.
                </p>
            </div>

        </div>
    );
};

export default About;