import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function _Loggedin({ user }: any) {

    const handleLogout = () => {
        axios.get('/auth/logout')
        .then((res) => {
            if(res.data)
                window.location.href = '/';
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <h3 className="mb-4 font-weight-bold text-primary">My Account</h3>
            <img src={user.photoUrl} alt="user" className="mb-2" style={{borderRadius: '50%'}} />
            <h4 className="mb-5">Hello, <strong>{user.username}</strong></h4>
            <Button className="btn btn-primary" onClick={handleLogout}>Sign Out</Button>
        </>
    );
}

const mapStateToProps = (state: any) => ({
    user: state.user
});

export default connect(mapStateToProps, null)(_Loggedin);