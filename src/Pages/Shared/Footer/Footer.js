import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer style={{marginTop:'30px'}} className='w-100 footer'>
            <h2 style={{padding:"30px"}} className='text-info'><span style={{ color: 'orangered' }}> Mr.</span> Mechanic</h2>
            <Row className='container-fluid'>
                <Col style={{textAlign:"left" , textDecoration:"none"}} className='text-left' lg={4} md={4}  sm={12}>
                    <h2 className='text-light'>Overview</h2>
                    <div className='Link'>
                        <Link style={{ textDecoration:"none"}} to="/about">About</Link>
                        <br />
                        <Link to="/about">Careers</Link>
                        <br />
                        <Link to="/about">Press</Link>
                        <br />

                        <Link to="/about">Contact</Link>
                        <br />
                        <Link to="/about">Terms of Use</Link>
                        <br />
                        <Link to="/about">Privacy Policy</Link>
                        
                    </div>
                </Col>
                <Col style={{textAlign:"left"}} lg={4} md={4} sm={12}>
                    <h2 className='text-light'>Community</h2>
                    <div className='text-light '>
                        <p className='text-left'>Comunity Central</p>
                        <p className='text-left'>Support</p>
                        <p>Help</p>
                        <p>Do Not Sell My Info</p>
                        
                    </div>
                </Col >
                <Col style={{textAlign:"left"}} lg={4} md={4} sm={12}>
                    <h2 className='text-light'>Follow Me</h2>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;