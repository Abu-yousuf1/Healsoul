import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="primary-bg-color ps-4 text-light row">
            <div className="col-lg-3 m-lg-5 m-2">
                <h1><span className="fw-bold secondary-color">heal</span>soul</h1>
                <p className="text-muted mt-4 fw-bold">Powerfully flexible WordPress theme for medical & health related organizations, institutes, clinics and businesses.
                </p>
                <h6 className="fw-bold mt-5">SUBSCRIBE</h6>
            </div>

            <div className="col-lg-2 mt-5">
                <h5 className="fw-bold">USEFUL LINKS</h5>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
            </div>

            <div className="col-lg-6  d-flex align-items-center justify-content-center">
                <i className="fab fa-facebook text-muted fs-3 "></i>
                <i className="fab fa-twitter text-muted ps-3 fs-3 "></i>
                <i className="fab fa-instagram-square text-muted ps-3 fs-3 "></i>
                <i className="fab fa-vimeo-v text-muted ps-3 fs-3 "></i>
            </div>
        </div>
    );
};

export default Footer;