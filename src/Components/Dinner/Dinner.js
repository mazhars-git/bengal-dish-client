import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DinnerData from './DinnerData';
import UseItems from './../UseItems/UseItems';

const Dinner = () => {
    const [itemsData] = UseItems();

    const dinner = itemsData.filter(function (el)
        {
            return el.category === "dinner";
        }
    );
    console.log(dinner);

    return (
        <Container>
            <Row>
                {
                    dinner.map(dishInfo => <DinnerData key={dishInfo._id} data={dishInfo}></DinnerData>)
                }
            </Row>
        </Container>
    );
};

export default Dinner;