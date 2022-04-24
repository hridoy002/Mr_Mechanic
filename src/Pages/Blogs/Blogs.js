import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div style={{ marginTop: '50px' }}>
            <h3>Blogs</h3>
            <Accordion className='my-5 w-50 mx-auto' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is difference between Authentication and Authorization</Accordion.Header>
                    <Accordion.Body>
                        <b>Authentication:</b> <li>Authentication check who are you(user identity).</li>
                        <li>Authentication implement by take User details like: Phone no,email or any kind of user identity.</li>

                        <b>Authorization:</b><li>Authorizaton maintain a user,which type of resource he can access.</li>
                        <li>Authorization maintain by authority.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Google firebse is a popular backend application software and realtime database .I am using firebase because its banificial side.It offers many many features totally free.For a begginer junior developer it is very helpful.And as this is a open source platform so it has large comunitty .For all this reason, I use firebase.
                        <hr className='w-25 mx-auto' />
                        <br />
                        <b>Alternative of Firebase</b>
                        <br />
                        i.Auth0 ii.Okta iii.Jump Cloud
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase provides many service.They have many features such as:
                        <ul style={{listDecoration:'none'}}>
                            <br/>Cloud Storage
                            <br/>Hosting
                            <br/>Authentication
                            <br/>Google Analytics
                            <br/>Cloud Firestore
                            <br/>Dynamic Links
                            <br/>Cloud Functions
                            <br/>Predictions
                            <br/>Cloud Messaging
                            <br/>Remote Config
                        </ul>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                       
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;
