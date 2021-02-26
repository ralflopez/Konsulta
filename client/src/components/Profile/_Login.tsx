import React from 'react';
import AuthButton from './Auth/AuthButton';
import googleLogo from './Auth/icons/google-logo.png';
import emailLogo from './Auth/icons/email-logo.png';

function _Login() {

    const handleGoogleAuth = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    }

    return (
        <div className="mx-auto d-flex flex-column align-items-center">
            <h4 className="font-weight-bold mb-4">Log in</h4>
            <AuthButton
                name="Google"
                logo={googleLogo}
                color="#DB4437"
                onClick={handleGoogleAuth}
            />
            <AuthButton
                name="Email"
                logo={emailLogo}
                color="#3943B7"
            />
        </div>
    );
}

export default _Login;