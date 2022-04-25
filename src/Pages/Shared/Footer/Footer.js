import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import fb from '../../../images/social/facebook.png'
import google from '../../../images/social/goodle.png'
import linkedin from '../../../images/social/icons8-linkedin-circled-48.png'
import whatsapp from '../../../images/social/icons8-whatsapp-48.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{ marginTop: '30px' }} className='w-100 footer'>
            <h2 style={{ padding: "30px" }} className='text-info'><span style={{ color: 'orangered' }}> Mr.</span> Mechanic</h2>
            <Row className='container row'>
                <Col style={{ textAlign: "left", textDecoration: "none" }} className='text-left col' lg={4} md={4}>
                    <h2 className='text-light'>Overview</h2>
                    <div className='Link'>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/about">About</Link>
                        <br />
                        <Link style={{ textDecoration: "none", color: "white" }} to="/about">Careers</Link>
                        <br />
                        <Link style={{ textDecoration: "none", color: "white" }} to="/about">Press</Link>
                        <br />

                        <Link style={{ textDecoration: "none", color: "white" }} to="/about">Contact</Link>
                        <br />
                        <Link style={{ textDecoration: "none", color: "white" }} to="/about">Terms of Use</Link>
                        <br />
                        <Link style={{ textDecoration: "none", color: "white" }} to="/about">Privacy Policy</Link>

                    </div>
                </Col>
                <Col style={{ textAlign: "left" }} lg={4} md={4}
                    className='col'>
                    <h2 className='text-light'>Community</h2>
                    <div className='text-light '>
                        <p className='text-left'>Comunity Central</p>
                        <p className='text-left'>Support</p>
                        <p>Help</p>
                        <p>Do Not Sell My Info</p>

                    </div>
                </Col >
                <Col style={{ textAlign: "left" }} lg={4} md={4} className='mb-5'>
                    <h2 className='text-light '>Follow Me</h2>
                    <div>
                        <img style={{ width: '40px' }} className='me-2' src={fb} alt="" />
                        <img style={{ width: '40px' }} className='me-2' src={google} alt="" />
                        <img style={{ width: '40px' }} className='me-2' src={linkedin} alt="" />
                        <img style={{ width: '40px' }} className='me-2' src={whatsapp} alt="" />
                    </div>
                </Col>
            </Row>
            <div className='pb-2'>
                <p style={{ fontSize: '14px', color: 'gray' }}>All rights reserved to &copy; HR Production {year} </p>
            </div>
        </footer>
    );
};

export default Footer;