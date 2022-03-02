import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/error/5203299.jpg'
const NotFound = () => {
    return (
        <div className='container'>
            <div className='col-md-5 m-auto'>
                <img className='img-fluid' src={Error} alt="" />
                <Link to="/"><button className='btn btn-warning'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;