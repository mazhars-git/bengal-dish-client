import React from 'react';
import '../Css/CheckOut.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

const CheckOut = (props) => {
    const {itemId} = useParams();
    const [booking, setBooking] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/item/${itemId}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])

    console.log(booking);


    return (
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{booking.item} </h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                    </div>
                    <div className="col-md-6">
                        <img width='400' alt='Item_Image' src={booking.image}></img>
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