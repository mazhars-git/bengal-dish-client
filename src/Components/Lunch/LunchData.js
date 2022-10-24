import React from 'react';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LunchData = (props) => {
    const {_id, image, item, price} = props.data;

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div className="col-md-4">
            <div onClick={() => navigateToItemDetail(_id)} className="content-box">
                <Image src={image} alt="lunch" fluid />
                <h6>{item}</h6>
                <h4>${price}</h4>
            </div>
        </div>
    );
};

export default LunchData;