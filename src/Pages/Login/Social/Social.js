import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from "../../../images/social/goodle.png"
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50 '></div>
                <p className='mt-3 mx-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-info text-light'><img src={google} style={{width:'25px'}} alt="" /> Sign With Google</button>
        </div>
    );
};

export default Social;