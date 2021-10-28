import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar className="primary-bg-color" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="#" className="fw-bold"><span className="text-primary">Heal</span><span className="secondary-color">soul</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="my-2 my-lg-0 justify-content-end"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            <Navbar.Text>
                                {/* Signed in as: <a href="#login">Mark Otto</a> */}
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >

    );
};

export default Header;