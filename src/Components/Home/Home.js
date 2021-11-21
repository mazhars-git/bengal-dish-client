import { Button } from '@material-ui/core';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="py-5">
            {/* <Navbar variant="tabs">
                <Container>
                
                <Nav className="m-auto">
                <Nav.Link href="/breakfast">Breakfast</Nav.Link>
                <Nav.Link href="/lunch">Lunch</Nav.Link>
                <Nav.Link href="/dinner">Dinner</Nav.Link>
                </Nav>
                </Container>
            </Navbar> */}


            <Container>
                <Nav variant="tabs" className="justify-content-center" activeKey="/breakfast">
                    <Nav.Item>
                    <Nav.Link href="/breakfast">Breakfast</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/lunch" eventKey="link-1">Lunch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/dinner" eventKey="link-2">Dinner</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Row>
                    <Col>1 of 1
                        

                        <h3>This is home area</h3>

                        <Button variant="contained">Checkout your food </Button>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;