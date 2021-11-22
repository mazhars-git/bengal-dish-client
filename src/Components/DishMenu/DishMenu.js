import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';

const DishMenu = () => {
    return (
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
    );
};

export default DishMenu;