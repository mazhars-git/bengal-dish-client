import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import break_fast from '../../FakeData/breakfast.json';
import BreakFastData from '../BreakFast/BreakFastData';

const BreakFast = () => {
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItemsData(data))
    }, []);
    console.log(itemsData);

    const breakfastData = itemsData.filter(function (el)
    {
    return el.category == "breakfast";
    }
    );
    console.log(breakfastData);

   
    return (
        <section>
            <Container>
                <Row>
                    {
                        breakfastData.map(data => <BreakFastData key={data._id} data={data}></BreakFastData>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BreakFast;