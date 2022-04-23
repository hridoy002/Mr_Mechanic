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
            <h2 className='my-5'>Services</h2>
            <CardGroup>
                {repairs.map(repair => <Service key='id' repair={repair} />)}
            </CardGroup>
        </div>
    );
};

export default Services;