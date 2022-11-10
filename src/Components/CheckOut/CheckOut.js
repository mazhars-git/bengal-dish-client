import React from 'react';

const CheckOut = () => {
    return (
        <section>
            <div className="container">
                <div classNam="row">
                    <div className="col-md-6">
                        <h2>Address and Payment</h2>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Your Cart</h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CheckOut;