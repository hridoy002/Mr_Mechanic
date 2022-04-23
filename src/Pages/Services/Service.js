import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ repair }) => {
    const { name, img, description, price } = repair;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'white'}} className='border-0 '>
                <button className='btn btn-info'>Repair Now</button>
            </Card.Footer>
        </Card>
    );
};

export default Service;