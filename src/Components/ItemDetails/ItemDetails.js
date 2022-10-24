import React from 'react';
import '../Css/ItemDetails.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

const ItemDetails = (props) => {
    const {itemId} = useParams();
    const [booking, setBooking] = useState({});
    const [num, setNum] = useState(1);

    useEffect(() =>{
        fetch(`http://localhost:5000/item/${itemId}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])

    console.log(booking);

    const handleIncrease = () => {
        setNum (num+1);   
     }
     const handleDecrease = () => {
        if(num > 1){
            setNum (num-1);
        }else{
            swal({
                title: "Something Went Wrong!!!",
                icon: "warning",
                button: true,
                dangerMode: true,
            })
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
                                    <p className="quantity">{num}</p>
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