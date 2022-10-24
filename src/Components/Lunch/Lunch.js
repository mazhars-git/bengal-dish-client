import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LunchData from './LunchData';
import UseItems from './../UseItems/UseItems';

const Lunch = () => {
    const [itemsData] = UseItems();

    const lunch = itemsData.filter(function (el)
        {
            return el.category === "lunch";
        }
    );
    console.log(lunch);

    return (
        <Container> 
            <Row>
                {
                    lunch.map(info => <LunchData key={info._id} data={info}></LunchData>)
                }
            </Row>
        </Container>
    );
};

export default Lunch;