import React from 'react';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LunchData = (props) => {
    const {_id, image, item} = props.data;

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div className="col-md-4">
            <div className="content-box">
                <Image src={image} fluid/>
                <h6>{item}</h6>
                <button onClick={() => navigateToItemDetail(_id)} className="btn-brand">Order Now</button>
            </div>
        </div>
    );
};

export default LunchData;