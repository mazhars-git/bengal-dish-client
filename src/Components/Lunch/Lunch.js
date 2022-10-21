import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import LunchInfo from '../../FakeData/lunch.json';
import LunchData from './LunchData';

const Lunch = () => {
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItemsData(data))
    }, []);
    console.log(itemsData);

    const lunchData = itemsData.filter(function (el)
    {
    return el.category == "lunch";
    }
    );
    console.log(lunchData);

    return (
        <Container> 
            <Row>
                {
                    lunchData.map(info => <LunchData key={info._id} data={info}></LunchData>)
                }
            </Row>
        </Container>
    );
};

export default Lunch;