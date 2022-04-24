import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    // log in by email password auth hook 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //   form submit 
    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/')
    }
    let errorMessage;
    if (error) {
           errorMessage=<p className='text-danger'>Error: {error.message}</p>;}

    // password reset auth hook 
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    )
    const [email, setEmail] = useState();

    


    return (
        <div style={{ height: '500px' }} className='container w-50'>
            <h2 className='my-4 text-info'>Login</h2>
            <Form onSubmit={handleLoginSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                
                {errorMessage}
                <Button className='btn-info text-light w-50' variant="primary" type="submit">
                    Login
                </Button>
                <p>Haven't any account?<Link to='/register' className='text-info text-decoration-none'> Please Register.</Link></p>
                <p>Forget Your Password?<button onClick={async () => {
                    await sendPasswordResetEmail(email);
                    if (email) {
                        toast('Sent email');
                    }
                }} className='btn btn-link text-decoration-none text-info'>Reset Password</button></p>
            </Form>
            <ToastContainer/>

        </div>
    );
};

export default Login;