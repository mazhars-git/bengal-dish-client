import React from 'react';
import { Image } from 'react-bootstrap';

const DinnerData = (props) => {
    const {image, item} = props.data;
    return (
        <div className="col-md-4">
            <div className="content-box">
                <Image src={image} fluid/>
                <h6>{item}</h6>
            </div>
        </div>
    );
};

export default DinnerData;