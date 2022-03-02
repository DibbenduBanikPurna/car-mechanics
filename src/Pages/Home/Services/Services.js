import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setService(data)
            })
    }, [])
    return (
        <div id="services" className='container'>
            <div className='row mt-5'>
                {
                    service.map((service) => {
                        return <Service key={service.id} service={service} />
                    })
                }
            </div>


        </div>
    );
};

export default Services;