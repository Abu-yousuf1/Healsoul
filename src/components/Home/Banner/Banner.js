import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from "../../../images/banner.jpg"
import banner1 from "../../../images/banner2.jpg"
import banner2 from "../../../images/banner3.jpg"
import "./banner.css"

const Banner = () => {
    return (
        <div>
            {/*.................Banner carousel section.......... */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/*.................... introduction section....................*/}

            <section className="mt-5 pt-lg-5 container mb-5" >
                <h6 className="secondary-color mb-3">INTRODUCING</h6>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h1 className="primary-color fw-bolder ">We thrive on building a healthy community for all individuals.</h1>
                    </div>
                    <div className="col-lg-6">
                        <p className="text-muted  fs-5">
                            Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community. We build systems for providing health services for individuals, families, communities and populations in general, and not just patients.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Banner;