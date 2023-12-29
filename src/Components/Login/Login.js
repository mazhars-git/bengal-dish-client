import React, { useState } from 'react';
import logo from '../../images/logo2.png';
import google_icon from '../../images/google.png';
import '../Css/Login.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const [user, setUser] = useState();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error: ' + error.message);
        })
    }
    
    return (
        <section className="login-area">
            <div className="container py-3">
                <div className="login-content py-3 px-5">
                    <img src={logo} style={{ width: '120px', alignItems: 'center' }} alt="" />
                    <div className="my-3 pt-3">
                        <form onSubmit={handleLogin} className="login-form g-3">
                            <div className="mb-3">
                                {/* <label for="email" className="form-label">Email</label> */}
                                <input type="email" className="form-control" id="email" name='email' placeholder='Email' required />
                            </div>
                            <div className="mb-3">
                                {/* <label for="password" className="form-label">Password</label> */}
                                <input type="password" className="form-control" id="password" name='password' placeholder='Password' required />
                            </div>                          
                            <div className="mb-3">
                                <button type="submit" className="btn btn-login form-control">Log in</button>
                            </div>
                            <p className="text-center">Didn't Register yet? <Link to="/signup">Sign Up</Link></p>
                        </form>

                            <h6 className="text-center fst-italic py-2">Or use one of these</h6>
                        
                    {/* google sign in system */}

                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-google">
                                <img style={{width: '15px', marginRight: '10px'}} src={google_icon} alt="google_icon" />
                                Google Sign in
                            </button>
                        </div>
                    </div>

                    {/**  link to back home */}

                    <Link to="/">
                        <ArrowBackIcon />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Login;