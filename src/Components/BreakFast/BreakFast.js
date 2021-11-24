import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import break_fast from '../../FakeData/breakfast.json';
import BreakFastData from '../BreakFast/BreakFastData';

const BreakFast = () => {
    const [breakFast, setBreakFast] = useState([]);

    useEffect(() => {
       setBreakFast(break_fast);
    }, [])
    console.log(breakFast);
    return (
        <section>
            <Container>

                <h1>Breakfast Area</h1>
                <Row>
                    {
                        breakFast.map(data => <BreakFastData data={data}></BreakFastData>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BreakFast;