import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, id, price, description, img } = service
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img className='img-fluid' src={img} alt={id} />
                <div className='card-body'>
                    <p>{name}</p>
                    <p>price: {price}</p>
                    <p className='text-muted '>{description}</p>
                    <Link to={`/booking/${id}`}>
                        <button className='btn btn-success'>Book {name.toLowerCase()}</button>

                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Service;