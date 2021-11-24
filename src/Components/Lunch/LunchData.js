import React from 'react';
import { Image } from 'react-bootstrap';

const LunchData = (props) => {
    const {image, item} = props.data;
    return (
        <div className="col-md-4 text-center">
            <Image src={image} fluid/>
            <h4>{item}</h4>
        </div>
    );
};

export default LunchData;