import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ repair }) => {
    const { name, img, description, price } = repair;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{textAlign:"justify"}} className='text-alignment-justify'>
                    {description.slice(0,450)}
                </Card.Text>
                <h5>Visit Price: {price}</h5>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'white'}} className='border-0 '>
            <Link to='/checkout' ><button className='btn btn-warning w-50 text-light'> Hire Me</button></Link>
            </Card.Footer>
        </Card>
    );
};

export default Service;