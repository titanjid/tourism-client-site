import React from 'react';

const Driver = ({driver}) => {
    const {name,img,salary,description}=driver;
    return (
        <>
        <div className="col mt-5">
        <div className="card ">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start">Name: {name}</h5>
                <p className="card-text text-start">Salary: {salary}</p>
                <p className="card-text text-start">{description}</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default Driver;