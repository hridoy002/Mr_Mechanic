import React, { useEffect, useState } from 'react';
import "./Services.css"
import { CardGroup } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [repairs, setRepairs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRepairs(data))
    }
        , [])
    return (
        <div className='services'>
            <h2 className='title my-5'><span>Services</span> </h2>
            <CardGroup className='cardGroup'>
                {repairs.map(repair => <Service key={repair.id} repair={repair} />)}
            </CardGroup>
        </div>
    );
};

export default Services;