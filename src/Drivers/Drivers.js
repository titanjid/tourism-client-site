import React, { useEffect, useState } from 'react';
import Driver from './../Driver/Driver';

const Drivers = () => {
    const [drivers,setDrivers]=useState([]);
    useEffect(()=>{
        fetch("https://warm-shelf-74484.herokuapp.com/driver")
        .then(res => res.json())
        .then(data => setDrivers(data))
    },[])
    return (
        <div className="container mb-5">
            <h2 className="mt-5">Our Experienced Drivers</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                    drivers.map(driver => <Driver
                        key={driver._id}
                        driver={driver}
                    ></Driver>)
                }
            </div>
        </div>
    );
};

export default Drivers;