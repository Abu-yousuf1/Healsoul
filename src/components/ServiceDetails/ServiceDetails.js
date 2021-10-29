import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Abu-yousuf1/ema-jhon-simple/main/public/services.json")
            .then(res => res.json())
            .then(data => { setItems(data) })
    }, [])

    const filteringItems = items.filter(item => item.id == serviceId)

    const service = (filteringItems[0]);
    return (
        <div>
            <Header />
            <div className=" w-50 mx-auto my-5" >
                <Col>
                    <Card>
                        <Card.Img variant="top" className="img-fluid" src={service?.image} />
                        <Card.Body className="text-center">
                            <Card.Title className="secondary-color">{service?.name}</Card.Title>
                            <Card.Text className="text-muted ">
                                {service?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;