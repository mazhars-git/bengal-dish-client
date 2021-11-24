import React from 'react';
import { Image } from 'react-bootstrap';

const BreakFastData = (props) => {
    const {image, item} = props.data;

    console.log(image)

    return (
        <div className="col-md-4 text-center">
            <Image src={image} alt="breakfast" fluid />
            <h4>{item}</h4>
        </div>
    );
};

export default BreakFastData;