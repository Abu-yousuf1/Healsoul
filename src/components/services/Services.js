import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="mt-5 pt-lg-5 m-2">
            <div className="mt-5">
                <h6 className="fw-bold text-lg-center secondary-color">OUR SERVICES</h6>
                <h1 className="fw-bolder mt-4 primary-color text-lg-center">Health Care Services</h1>
                <h4 className="text-lg-center mx-lg-5 px-lg-5 text-muted mt-4">We make efforts to change the way that healthcare services are offered in order to meet the changing needs of our patients, both for the present and future.</h4>
            </div>

            <Row xs={1} md={2} lg={3} className="g-5 mt-5" id="services">
                {
                    items.map(serv => <Service
                        key={serv.id}
                        service={serv}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;