import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import logoColored from '../../assets/logo-colored.svg';
import ToggleIcon from './ToggleIcon';

function NavBar() {
    // let [isLogoShown, setIsLogoShown] = useState(false); 

    useEffect(() => {
        
        // document.addEventListener('scroll', () => {
        //     console.log(window.scrollY)
        //     if(window.scrollY > 70)
        //         setIsLogoShown(true)
        //     else if (window.scrollY < 70)
        //         setIsLogoShown(false)
        // });

    }, []);

    return (
        <Navbar fixed="top" expand="md" className="navbar-container">
            <Container className="pb-md-3 pt-md-3">
                <Row className="w-100 mx-auto">
                    <Col xs={6} className="p-md-0">
                        <Navbar.Brand className="d-flex align-items-center">
                            <img src={logoColored} alt="logo" className="brand-logo"/>
                        </Navbar.Brand>
                    </Col>
                    <Col xs={6} className="p-md-0 text-right">
                        <ToggleIcon>
                            <Nav className="w-100 d-sm-flex justify-content-around align-items-center">
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>Consult</Nav.Link>
                                <Nav.Link>Profile</Nav.Link>
                            </Nav>
                        </ToggleIcon>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavBar;