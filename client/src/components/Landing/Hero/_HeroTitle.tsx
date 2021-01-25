import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../../assets/logo.svg';

function _HeroTitle() {
    return (
        <>
            <img src={logo} className="hero-logo"/>
            <div className="d-inline-block hero-title">
                <h1>Konsulta</h1>
                <p>Seek medical consultation online</p>
            </div>
            <Button variant="light" size="lg" className="call-to-action">Find a Doctor</Button>
        </>
    );
}

export default _HeroTitle;