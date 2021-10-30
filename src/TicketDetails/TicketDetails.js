import React from 'react';
import './TicketDetails.css'

const TicketDetails = ({ticketDetails}) => {
    const {img,_id,place,description,price,time}=ticketDetails;

    return (
        <>
        <div className="col mt-5">
        <div className="card ticketDetails">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start">Location: {place}</h5>
                <p className="card-text text-start">Price: {price}</p>
                <p className="card-text text-start">Time: {time}</p>
                <p className="card-text text-start">{description}</p>
                <button>Boking Ticket</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default TicketDetails;