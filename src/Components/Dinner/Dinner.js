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
            <Row>
                {
                    dinner.map(dishInfo => <DinnerData data={dishInfo}></DinnerData>)
                }
            </Row>
        </Container>
    );
};

export default Dinner;