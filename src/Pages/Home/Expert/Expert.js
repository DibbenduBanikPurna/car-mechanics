import React from 'react';

const Expert = ({ expert }) => {

    const { name, img, expertise, id } = expert
    return (
        <div className='col-md-3'>
            <div className='card'>
                <img className='img-fluid' src={img} alt={id} />
                <div className='card-body'>
                    <h5>{name}</h5>
                    <p className='text-danger'>{expertise}</p>
                </div>
            </div>


        </div>
    );
};

export default Expert;