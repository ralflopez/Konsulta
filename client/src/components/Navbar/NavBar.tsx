import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import logoColored from '../../assets/logo-colored.svg';
import ToggleIcon from './ToggleIcon';

interface Location {
    pathname: string
}

interface HistoryStack {
    push: Function
}

function NavBar() {
    let history: HistoryStack = useHistory();
    let { pathname } : Location = useLocation();

    React.useEffect(() => console.log(pathname), [pathname]) 

    const handle_redirect = (path: string) => {
        if(pathname === path)
            return;

        history.push(path);
    }

    return (
        <Navbar fixed="top" expand="md" className="navbar-container">
            <Container className="pb-2 pt-2 pb-md-3 pt-md-3">
                <Row className="w-100 mx-auto">
                    <Col xs={6} className="p-md-0">
                        <Navbar.Brand className="d-flex align-items-center" onClick={() => handle_redirect('/')}>
                            <img src={logoColored} alt="logo" className="brand-logo"/>
                        </Navbar.Brand>
                    </Col>
                    <Col xs={6} className="p-md-0 text-right">
                        <ToggleIcon>
                            <Nav className="w-100 d-sm-flex justify-content-around align-items-center">
                                <Nav.Link 
                                    className={`${pathname === '/' && 'active'}`}
                                    onClick={() => handle_redirect('/')}
                                    >Home</Nav.Link>
                                <Nav.Link 
                                    className={`${pathname === '/consult' && 'active'}`}
                                    onClick={() => handle_redirect('/consult')}
                                    >Consult</Nav.Link>
                                <Nav.Link 
                                    className={`${pathname === '/profile' && 'active'}`}
                                    onClick={() => handle_redirect('/profile')}
                                    >Profile</Nav.Link>
                            </Nav>
                        </ToggleIcon>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavBar;