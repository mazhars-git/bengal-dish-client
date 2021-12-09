import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo2.png';

const MainMenu = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" expand="lg">
            <Navbar.Brand href="#"><Image src={Logo} style={{ width: '10rem' }}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainMenu;