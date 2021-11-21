import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Image, Row} from 'react-bootstrap';

const CardData = (props) => {
    const {image, details, heading, icon}= props.infos;
    return (
        <div>
            <Col>
            <Card border="light">
                <Card.Img variant="top" src={image} />
                <Card.Body className="py-3 px-1">
                    <Container>
                        <Row>
                            <Col xs={4} md={2} className="px-2">
                                <Image src={icon} alt="" />
                            </Col>
                            <Col xs={12} md={10} className="px-2">
                                <Card.Title><h5>{heading}</h5></Card.Title>
                                <Card.Text style={{fontSize: '13px'}}>
                                    {details}
                                </Card.Text>
                                <Card.Link href="#">See more <FontAwesomeIcon style={{color: '#10ff00'}} icon={faArrowAltCircleRight} /></Card.Link>
                            </Col>
                        </Row>
                    </Container>   
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default CardData;