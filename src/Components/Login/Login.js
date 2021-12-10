import React from 'react';
import logo from '../../images/logo2.png';

const Login = () => {
    return (
        <section className="login-area container">
            <div>
                <img src={logo} style={{width: '120px'}} alt="" />

                <div class="my-3">
                    <form class="g-3">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" />
                        </div>
                        <div class="mb-3">
                            <label for="re-password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="re-password" />
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