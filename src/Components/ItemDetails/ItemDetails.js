import React from 'react';
import '../Css/ItemDetails.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemDetails = (props) => {
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
                        
                        
                        <button className="btn-brand">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span> </span> Add
                        </button>
                    </div>
                    
                    <div className="col-md-6">
                        <img className="img-fluid align-self-center p-3" alt='Item_Image' src={booking.image}></img>
                    </div>
                    
                </div>

            </div>
        </section>

    );
};

export default ItemDetails;