import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./service.css"

const Service = (props) => {
    const { id, name, image, description } = props.service
    console.log("serv", name);
    return (

        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" className="card-image" src={image} />
                    <Card.Body className="text-center">
                        <Card.Title className="secondary-color fw-bold">{name}</Card.Title>
                        <Card.Text className="text-muted fw-bold">
                            {description}
                        </Card.Text>
                        <button className="btn btn-dark">Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;