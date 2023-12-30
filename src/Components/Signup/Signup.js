import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Signup = () => {

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }

    return (
        <section className="login-area">
            <div className="container py-3">
                <div className="login-content py-3 px-5">
                    <img src={logo} style={{ width: '120px', alignItems: 'center' }} alt="" />
                    <div className="my-3 pt-3">

                        {/** ---------Signup form -----------*/}

                        <form onSubmit={handleSignup} className="login-form g-3">
                            <div className="mb-3">
                                {/* <label for="name" className="form-label">Name</label> */}
                                <input type="text" className="form-control" id="name" placeholder='Name' />
                            </div>
                            <div className="mb-3">
                                {/* <label for="email" className="form-label">Email</label> */}
                                <input type="email" className="form-control" id="email" placeholder='Email' />
                            </div>
                            <div className="mb-3">
                                {/* <label for="password" className="form-label">Password</label> */}
                                <input type="password" className="form-control" id="password" placeholder='Password' />
                            </div>
                            <div className="mb-3">
                                {/* <label for="re-password" className="form-label">Confirm Password</label> */}
                                <input type="password" className="form-control" id="re-password" placeholder='Re-type Password' />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-login form-control">Sign Up</button>
                            </div>
                        </form>
                        
                        <p className="text-center">Already have an account? <Link to="/login">Log in</Link> </p>
                        
                        {/* <h6 className="text-center fst-italic py-2">Or use one of these</h6>
                        {/* google sign in system */}

                        {/* <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-google">
                                <img style={{ width: '15px', marginRight: '10px' }} src={google_icon} alt="google_icon" />
                                Google Sign in
                            </button>
                        </div> */}

                    </div> 

                    {/**  link to back home */}
                    <Link to="/">
                        <ArrowBackIcon />
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default Signup;