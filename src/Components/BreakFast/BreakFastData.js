import React from 'react';
import { Image } from 'react-bootstrap';
import '../Css/Breakfast.css';

const BreakFastData = (props) => {
    const {image, item} = props.data;

    return (
        <div className="col-md-4">
            <div className="content-box">
                <Image src={image} alt="breakfast" fluid />
                <h6>{item}</h6>
            </div>
        </div>
    );
};

export default BreakFastData;