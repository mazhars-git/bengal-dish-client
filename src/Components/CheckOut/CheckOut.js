import React from 'react';
import '../Css/CheckOut.css';

const CheckOut = () => {
    return (
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Light BreakFast</h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                    </div>
                    <div className="col-md-6">
                        <img width='400' height= '200' src="../../images/dish-1.jpg"></img>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CheckOut;