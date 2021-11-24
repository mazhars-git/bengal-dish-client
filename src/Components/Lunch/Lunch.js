import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import LunchInfo from '../../FakeData/lunch.json';
import LunchData from './LunchData';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        setLunch(LunchInfo);
    }, [])

    return (
        <Container> 
            <h2>Lunch Dishes</h2>
            <Row>
                {
                    lunch.map(info => <LunchData data={info}></LunchData>)
                }
            </Row>
        </Container>
    );
};

export default Lunch;