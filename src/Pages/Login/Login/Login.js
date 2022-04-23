import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const handleLoginSubmit = event =>{
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          signInWithEmailAndPassword(email,password);
      }

      if(user){
        navigate('/')
      }
    return (
        <div style={{height:'500px'}} className='container w-50'>
            <h2 className='my-4 text-info'>Login</h2>
            <Form onSubmit={handleLoginSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p>Haven't any account?<Link to='/register' className='text-info text-decoration-none'> Please Register.</Link></p>
                <p>Forget Your Password?<button className='btn btn-link text-decoration-none text-danger'>Reset Password</button></p>
        
                <Button className='btn-info text-light w-50' variant="primary" type="submit">
                   Login
                </Button>
            </Form>
            
        </div>
    );
};

export default Login;