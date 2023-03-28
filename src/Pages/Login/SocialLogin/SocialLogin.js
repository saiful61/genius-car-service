import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import google from '../../Login/SocialLogin/google-icon.jpg'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>{error?.message ? 'User login skipped' : ''}</p>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <Button onClick={() => signInWithGoogle()}
                    className="btn btn-light border w-50 d-block mx-auto my-2  mb-4">
                    {/* className='btn btn-info w-50 d-block mx-auto my-2' */}
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className=''>Countinue With Google</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;