import React from 'react';
import { Col, Row } from 'react-bootstrap';
import career from '../../../images/career/career.png'
import career1 from "../../../images/career/career1.png"

const Career = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 mb-3'>Career Status</h2>
            <Row >
                <Col>
                    <h3 style={{textAlign:"left"}}>Professional Life</h3>
                    <p  style={{fontSize:"18px",fontWeight:"500",textAlign:"left"}}>I am Mr. Mechanic Mir Refat.</p>
                    <p style={{fontSize:"18px",fontWeight:"500",textAlign:"justify"}}>Worked on many company as a Asst. Electrical Engineer.Like
                     
                            <li>EX Sub-Assistant Engineer at Unity Lift Engineering and Technology Ltd.</li>
                            <li>Former Sub-assistant Engineer at Hygienenetex Bangladesh.</li>
                        
                    </p>
                </Col>
                <Col>
                    <img height='300px' src={career} alt="" />
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <img height='300px' src={career1} alt="" />
                </Col>
                <Col>
                    <h4 style={{textAlign:"left"}}>Mr. Mechanic</h4>
                    <p style={{fontSize:"18px",fontWeight:"500",textAlign:"left"}}>Mr. Mechanic is home applience repair service.Basically I provide service at home.So it is very beneficial for the service recipients</p>
                </Col>
            </Row>
            <div>

            </div>
        </div>
    );
};

export default Career;