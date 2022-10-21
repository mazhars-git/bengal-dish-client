import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DinnerData from './DinnerData';

const Dinner = () => {
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItemsData(data))
    }, []);
    console.log(itemsData);

    const dinnerData = itemsData.filter(function (el)
    {
    return el.category == "dinner";
    }
    );
    console.log(dinnerData);

    return (
        <Container>
            <Row>
                {
                    dinnerData.map(dishInfo => <DinnerData key={dishInfo._id} data={dishInfo}></DinnerData>)
                }
            </Row>
        </Container>
    );
};

export default Dinner;