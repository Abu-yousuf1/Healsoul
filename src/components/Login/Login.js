import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import googleIcon from '../../images//google2.png'
import useAuth from '../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const { signWithGoogle, loginWithEmail, error } = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setError] = useState("")

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }

    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password Must be 6 characters long.")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password should contain at least  tow upper case.")
        }
        else {
            loginWithEmail(email, password);
            setError('')
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <Header />
            <div className="">
                <div className="d-flex justify-content-center my-4 mt-5" onClick={handleGoogleSignIn}>
                    <div >
                        <img className="d-inline img-fluid" src={googleIcon} alt="" />
                        <h5 className="d-inline">Sign up with Google</h5>
                    </div>
                </div>
            </div>



            <div className="login-container mx-2 mx-auto my-5">
                <Form onSubmit={handleLoginWithEmail}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePassword} placeholder="Password" />
                    </Form.Group>
                    {/* Error..........display..... */}
                    <p className="text-danger">{error || err}</p>
                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className="mt-5 text-center">Not a member get ? <Link to="/register"> Sign up </Link> </p>
            </div>

            <Footer />
        </div>
    );
};

export default Login; <h1>this is login </h1>