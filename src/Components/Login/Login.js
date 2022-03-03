import React from 'react';
import logo from '../../images/logo2.png';
import '../Css/Login.css';

const Login = () => {
    return (
        <section className="login-area">
            <div className="container w-25 m-auto py-5">
                <img src={logo} style={{width: '120px', alignItems: 'center'}} alt="" />

                <div class="my-3">
                    <form class="g-3">
                        <div class="mb-3">
                            {/* <label for="name" class="form-label">Name</label> */}
                            <input type="text" class="form-control" id="name" placeholder='Name' />
                        </div>
                        <div class="mb-3">
                            {/* <label for="email" class="form-label">Email</label> */}
                            <input type="email" class="form-control" id="email" placeholder='Email' />
                        </div>
                        <div class="mb-3">
                            {/* <label for="password" class="form-label">Password</label> */}
                            <input type="password" class="form-control" id="password" placeholder='Password' />
                        </div>
                        <div class="mb-3">
                            {/* <label for="re-password" class="form-label">Confirm Password</label> */}
                            <input type="password" class="form-control" id="re-password" placeholder='Re-type Password' />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary form-control">Sign in</button>
                        </div>
                        <p className="text-center">Already have an account?</p>
                    </form>
                </div>
               
            </div>
        </section>
    );
};

export default Login;