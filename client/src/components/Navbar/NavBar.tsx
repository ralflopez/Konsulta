import React, { useState } from 'react';
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
    let [isToggled, setToggled] = useState(false);

    React.useEffect(() => console.log(pathname), [pathname]) 

    const handle_redirect = (path: string) => {
        if(pathname === path)
            return;

        history.push(path);
        setToggled(!isToggled);
    }

    return (
        <Navbar fixed="top" expand="md" className="navbar-container pr-0 pl-0">
            <Container className="pb-2 pt-2 pb-md-2 pt-md-2">
                <Row className="w-100 mx-auto">
                    <Col xs={6} className="p-md-0">
                        <Navbar.Brand className="d-flex align-items-center" onClick={() => handle_redirect('/')}>
                            <img src={logoColored} alt="logo" className="brand-logo"/>
                        </Navbar.Brand>
                    </Col>
                    <Col xs={6} className="p-md-0 text-right">
                        <ToggleIcon isToggled={isToggled} setToggled={setToggled}>
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