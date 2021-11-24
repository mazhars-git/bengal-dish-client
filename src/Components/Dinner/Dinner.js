import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DinnerInfo from '../../FakeData/dinner.json';
import DinnerData from './DinnerData';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    
    useEffect(() => {
        setDinner(DinnerInfo)
    },[])

    return (
        <Container>
            <h4>This Dinner Section</h4>
            <Row>
                {
                    dinner.map(dishInfo => <DinnerData data={dishInfo}></DinnerData>)
                }
            </Row>
        </Container>
    );
};

export default Dinner;