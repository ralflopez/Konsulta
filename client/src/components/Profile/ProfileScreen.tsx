import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Email from './_Email';
import Loggedin from './_Loggedin';
import Login from './_Login';
import { connect } from 'react-redux';

function ProfileScreen({ user }: any) {
    return(
        <Container className="p-navbar">
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    {
                        user.username
                        ? <Loggedin />
                        : <Login />
                    }
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(ProfileScreen);