import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google2.png'
import "./Registration.css"

const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setError] = useState("")

    const { createUserWithEmail, signWithGoogle, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleSignUp = () => {
        signWithGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password Must be 6 characters long.")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password should contain at least  tow upper case.")
        }
        else {
            createUserWithEmail(email, password, name);
            history.push(redirect_uri)
            setError('')
        }
    }
    const handleUserName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <Header />
            <div className="section-container mx-auto mx-2 my-5">
                <h2 className="my-5 secondary-color" >Create a membership Account</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" onBlur={handleUserName} placeholder="User Name" />
                    </Form.Group>
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
                    <p className="text-danger">{err || error}</p>
                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>

                <h4 className="text-center my-5">-----or sign up with Google-----</h4>
                <div className="d-flex justify-content-center my-5 mt-5">
                    <div >
                        <img className="d-inline img-fluid" src={googleIcon} alt="" />
                        <h5 className="d-inline" onClick={handleGoogleSignUp}>Sign up with Google</h5>
                    </div>
                </div>
                <p className="mt-4 text-center">Already have an Account?<Link to="/login"> Sign in</Link> </p>
            </div>
            <Footer />
        </div>
    );
};

export default Registration;