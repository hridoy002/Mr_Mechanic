import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../../../../../Assignment_11/book-planet/src/pages/Loading/Loading';
import auth from '../../../firebase.init';
import google from "../../../images/social/goodle.png"
const Social = () => {
    const navigate = useNavigate()
    const [signInWithGoogle,user,error, loading] = useSignInWithGoogle(auth);
    if(user){
        navigate('/')
    }
    
    if(loading){
        return <Loading/>
    }

    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50 '></div>
                <p className='mt-3 mx-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary text-light'><img src={google} style={{width:'25px'}} alt="" /> Sign With Google</button>
        </div>
    );
};

export default Social;