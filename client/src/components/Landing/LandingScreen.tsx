import React from 'react';
import Concern from './Concern/Concern';
import Features from './Features/Features';
import Hero from './Hero/Hero';

function LandingScreen() {
    return (
        <>
            <Hero />
            <Features />
            <Concern />
        </>
    );
}

export default LandingScreen;