import React from 'react';
import banner from "../../../images/banner.jpg"
import "./banner.css"

const Banner = () => {
    return (
        <div>
            <div className="row mt-5 ps-5" >
                <div className="col-lg-5 d-flex align-items-center ps-5">
                    <h1 className="primary-color fw-bolder ">Committed to
                        <br />
                        <span className="secondary-color"> trusted health care</span>
                        <span className="text-muted fs-6">Caring for the community's most precious resource</span>
                    </h1>
                </div>
                <div className="col-lg-7 image ">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>


            <section className="mt-5 container mb-5" >
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