import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleTicket = () => {
    const{id}=useParams();
    const [ticket,setTicket]=useState({});
    useEffect(()=>{
        fetch(`https://warm-shelf-74484.herokuapp.com/allTicket/${id}`)
        .then(res => res.json())
        .then(data => setTicket(data))
    },[])
    return (
        <>
        <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-3">
        <div className="col mt-5">
        <div className="card">
            <img src={ticket.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start">Location: {ticket.place}</h5>
                <p className="card-text text-start">Price: {ticket.price}</p>
                <p className="card-text text-start">Time: {ticket.time}</p>
                <p className="card-text text-start">{ticket.description}</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default SingleTicket;