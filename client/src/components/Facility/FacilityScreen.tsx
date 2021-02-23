import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import sample from '../../assets/sample.jpg';
import BookingSection from './_BookingSection';
import Carousel from './_Carousel';

function FacilityScreen() {
    return (
        <Container className="p-navbar">
            <Row className="mb-3">
                <Col className="text-primary">
                    <Carousel />
                    <h2>The medical clinic</h2>
                    <p>This is the address</p>
                    <div className="text-dark pb-4">
                        <p>This is a descriThis is a description about the fa This is a description about the facility cilityp t This is a description about the facilThis is a description about the facility ity ion about the facility This is a description about the facility</p>
                    </div>
                    <div className="pb-4">
                        <h3>Doctor/s</h3>
                        <h5 className="text-dark">Doctor Neil DeGrasse Tyson</h5>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
                <BookingSection />
            </Row>
        </Container>
    );
}

export default FacilityScreen;