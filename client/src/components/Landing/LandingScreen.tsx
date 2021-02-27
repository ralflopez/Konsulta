import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Concern from './Concern/Concern';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import { fetchUser } from '../../redux/actions/userActions';

function LandingScreen({ fetchUser }: any) {

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <>
            <Hero />
            <Features />
            <Concern />
        </>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchUser: () => dispatch(fetchUser())
});

export default connect(null, mapDispatchToProps)(LandingScreen);