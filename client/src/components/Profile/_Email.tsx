import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import GoogleSignIn from './Auth/AuthButton';

function Email() {
    let [isRegister, setRegister] = useState(false);

    const handleRegister = () => {
        setRegister(cur => !cur);
    }

    return(
        <div className="bg-secondary auth-form-container pl-4 pr-4 pt-5 pb-5 b-r-50 mx-auto">
            <Form method="POST">
                {
                    isRegister
                    ? (<>
                        <h4 className="text-left mb-4">Signup</h4>
                        <Form.Group>
                            <Form.Control type="name" id="name" name="name" placeholder="Name" />
                        </Form.Group>
                      </>)
                    : <h4 className="text-left mb-4 font-weight-bold">Login</h4>
                }
                <Form.Group>
                    <Form.Control type="email" id="email" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" id="password" name="password" placeholder="Password" />
                </Form.Group>
                <div className="text-right">
                    <button type="button" className="btn btn-link bg-none" onClick={handleRegister}>
                        { isRegister ? 'I already have an account' : 'Create an account' }
                    </button>
                    <Button type="submit" variant="primary" className="ml-auto">Login</Button>
                </div>
            </Form>
        </div>
    );
}

export default Email;