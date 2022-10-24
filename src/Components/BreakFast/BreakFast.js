import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BreakFastData from '../BreakFast/BreakFastData';
import UseItems from '../UseItems/UseItems';

const BreakFast = () => {
    const [itemsData] = UseItems();
    console.log(itemsData);

    const breakfast = itemsData.filter(function (el)
    {
    return el.category === "breakfast";
    }
    );
    console.log(breakfast);

    return (
        <section>
            <Container>
                <Row>
                    {
                        breakfast.map(data => <BreakFastData key={data._id} data={data}></BreakFastData>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BreakFast;