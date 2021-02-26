import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from './_Card';
import { Link } from 'react-router-dom';

function ListPage() {
    return (
        <Container className="p-navbar">
            <Row>
                <Col xs={12} md={3} lg={2} className="mb-3">
                    <div className="b-r-50 bg-secondary text-black text-center w-100 p-3 pt-4 pb-4 mb-2">
                        <h6 className="text-dark text-center mb-3">Chat with out customer service for fast and convinience</h6>
                        <Link to="/chat" className="btn btn-primary">live chat</Link>
                    </div>
                </Col>
                <Col className="text-center text-md-left">
                    <h4 className="font-weight-bold text-primary">Facilities</h4>
                    <Card title="This clinic" caption="your md"/>
                    <Card title="This clinisdfsdfsfc" caption="your mdsdfs  your mdsdfsdfddsfsdfdsf dsfsfsdfsfsdfdf dfdsfsdfdf your mdsdfssdff  fdds dfdsfsdfdf"/>
                    <Card title="This clinisdfsdfsfc" caption="your mdsdfs  your mdsdfsdfddsfsdfdsf dsfsfsdfsfsdfdf dfdsfsdfdf your mdsdfssdff  fdds dfdsfsdfdf"/>
                </Col>
            </Row>
        </Container>
    );
}

export default ListPage;