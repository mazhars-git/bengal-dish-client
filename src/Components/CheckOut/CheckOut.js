import React from 'react';
import '../Css/CheckOut.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

const CheckOut = () => {
    const {itemId} = useParams();

    const {item, setItem} = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/item/${itemId}`)
        .then(res => res.json())
        .then(data => setItem(data));
    },[])

    console.log(item);
    return (
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Light BreakFast: </h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                    </div>
                    <div className="col-md-6">
                        <img width='400' height= '200' alt='Item_Image' src="#"></img>
                    </div>
                    <button className="btn-brand">
                        Order Now
                    </button>
                </div>

            </div>
        </section>

    );
};

export default CheckOut;