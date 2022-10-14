import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import break_fast from '../../FakeData/breakfast.json';
import BreakFastData from '../BreakFast/BreakFastData';

const BreakFast = () => {
    const [breakFast, setBreakFast] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setBreakFast(data))
    }, []);

    console.log(breakFast);


    return (
        <section>
            <Container>
                <Row>
                    {
                        breakFast.map(data => <BreakFastData key={data._id} data={data}></BreakFastData>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BreakFast;