import React, { useContext } from 'react';
import { Image, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo2.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { AuthContext } from '../../Providers/AuthProviders';

const MainMenu = () => {
    const { user } = useContext(AuthContext)

    const handleLogOut = () => {

    }

    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="/"><Image src={Logo} style={{ width: '10rem' }}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        
                        <Nav.Link href="/checkout">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </Nav.Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
    
                        { 
                            // user ? <>
                            //     <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                            // </> 

                            // : 

                            <Nav.Link href="/login">Login</Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainMenu;