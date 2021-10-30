import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../Auth/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/ ">Tourist Ticket Service</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/busTicket">BusTicket</Nav.Link>
                <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                </Nav>
                <div>
                {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="text-white">LogIn</Nav.Link>}
                    </div>
                   <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                   </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;