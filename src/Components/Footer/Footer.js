import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../Css/Footer.css';
import Logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer-area" id="contact">
            <Container className="pt-5 pb-2">
            <Row>
                <Col md={6} className="text-left">
                    <Image style={{width: '10rem'}} src={Logo}></Image>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col md={6}>
                            <ul className="footer-list">
                                <li><a href="#">About Online Food</a></li>
                                <li><a href="#">Read Our Blog</a></li>
                                <li><a href="#">Signup To Deliver</a></li>
                                <li><a href="#">Add Your Restaurant</a></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <ul className="footer-list animate__animated animate__fadeInTopRight">
                                <li><a href="#">Get helps</a></li>
                                <li><a href="#">Read FAQs</a></li>
                                <li><a href="#">View all cities</a></li>
                                <li><a href="#">Restaurants near me</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="pt-5 pb-2">
                <Col md={6}>
                    <ul className="footer-icon d-flex justify-content-start">
                        <li className="mr-4"><a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li className="mr-4"><a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li className=""><a href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </Col>
                <Col md={6}>
                    <ul className="footer-list-3">
                        <li className="pr-5"><a href="">Privacy policy</a></li>
                        <li className="pr-5"><a href="">Terms of Use</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </Col>
            </Row>
                <p className="mt-2" style={{color: 'GrayText'}}>Copyright &copy;2021 mazhar's creation.</p>
            </Container>
        </section>
    );
};

export default Footer;