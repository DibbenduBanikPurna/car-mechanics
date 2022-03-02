import React, { useState, useEffect } from 'react';
import Expert from '../Expert/Expert'
const Experts = () => {
    const [expert, setExpert] = useState([])
    // console.log(expert)
    useEffect(() => {
        fetch('Expert.json')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setExpert(data)
            })

    }, [])
    return (
        <div id="experts" className='container'>
            <h2 className='mt-5 text-primary mb-3'>our Experts</h2>

            <div className='row'>

                {
                    expert.map((expert) => {
                        return <Expert key={expert.id} expert={expert} />
                    })
                }
            </div>

        </div>
    );
};

export default Experts;