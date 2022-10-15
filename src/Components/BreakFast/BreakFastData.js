import React from 'react';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Css/Breakfast.css';

const BreakFastData = (props) => {
    const {_id, image, item} = props.data;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }

    return (
        <div className="col-md-4">
            <div className="content-box">
                <Image src={image} alt="breakfast" fluid />
                <h6>{item}</h6>
                <button onClick={() => navigateToItemDetail(_id)} className="btn-brand">Order Now</button>
            </div>
        </div>
    );
};

export default BreakFastData;