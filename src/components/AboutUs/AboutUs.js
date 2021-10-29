import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="section-container mx-auto text-center my-5">
                <h3 className="primary-color fw-bold">Building a healthy community for all.</h3>
                <h5 className="text-muted">Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community.</h5>
            </div>


            <div className="container mt-5 py-5">
                <div className="row ">
                    <div className="col-lg-4 text-center">
                        <i className="fas fa-code-branch fs-1 primary-color"></i>
                        <h1 className="secondary-color fw-bold my-2">6500+</h1>
                        <p className="text-muted fw-bold">Bring best quality health services to ones who are in need worldwide.</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i class="fas fa-hospital fs-1 primary-color"></i>
                        <h1 className="secondary-color fw-bold my-2">1000+</h1>
                        <p className="text-muted fw-bold">Bring best quality health services to ones who are in need worldwide.</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i class="fas fa-map-marker-alt fs-1 primary-color"></i>
                        <h1 className="secondary-color fw-bold my-2">300+</h1>
                        <p className="text-muted fw-bold">Bring best quality health services to ones who are in need worldwide.</p>
                    </div>
                </div>
            </div>

            <div className="section-container mx-auto text-center my-5">
                <h3 className="primary-color fw-bold">Periodic Checkups and Profound Analysis.</h3>
                <h5 className="secondary-color fw-bold">We thrive on building a healthy and solid community for all individuals.</h5>
                <h5 className="text-muted">Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community. We build systems for providing health services for individuals, families, communities and populations in general, and not just patients.</h5>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;