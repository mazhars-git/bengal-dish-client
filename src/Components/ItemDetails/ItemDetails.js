import React from 'react';
import '../Css/ItemDetails.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemDetails = (props) => {
    const {itemId} = useParams();
    const [booking, setBooking] = useState({});
    const [itemNum, setItemNum] = useState(1);

    useEffect(() =>{
        fetch(`http://localhost:5000/item/${itemId}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])

    console.log(booking);

    const handleIncrease = () => {
        setItemNum (itemNum+1);   
     }
     const handleDecrease = () => {
        if(itemNum > 1){
            setItemNum (itemNum-1);
        }else{
            return false;
        }
        
     }

    return (
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{booking.item} </h1>
                        <p>{booking.description}</p>
                        
                        <div className="d-flex py-3">
                            <div className="item-price">
                                <h2>${booking.price}</h2>
                            </div>                            
    
                            <div className="d-flex quantity-box">
                                <span onClick={handleDecrease} className="minus"> - </span>
                                    <p className="quantity">{itemNum}</p>
                                <span onClick={handleIncrease} id="plusBtn" className="plus"> + </span>
                            </div>
                            
                        </div>
                        
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