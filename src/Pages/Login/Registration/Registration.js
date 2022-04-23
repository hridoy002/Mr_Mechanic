import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Registration = () => {
    // create user hook 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    // handle form submit 
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger' style={{textAlign:'left'}}>Error: {error.message}</p>
    }
    return (
        <div className='container my-5 w-50'>
            <Form onSubmit={handleRegisterSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                {errorMessage}
                 
                <div style={{textAlign:'left',}}>
                    <input type="checkbox" name="checkbox" id="" /> <label htmlFor="checkbox">Accept Terms and Privacy</label>
                </div>
                
                <Button className='w-50 my-3 btn-info text-light' variant="primary" type="submit">
                    Register
                </Button>
                <p>Already have an account?<Link className='text-info text-decoration-none' to='/login'> Please Login</Link></p>
            </Form>
            <Social/>
        </div>
    );
};

export default Registration;