import React, { useEffect } from 'react';
import { useState } from 'react';
import TicketDetails from './../../TicketDetails/TicketDetails';

const AllBusTicket = () => {
    const[allBusTickets,setAllBusTickets]=useState([]);
    useEffect(()=>{
        fetch("https://warm-shelf-74484.herokuapp.com/allTicket")
        .then(res =>res.json())
        .then(data => setAllBusTickets(data))
    },[])
    return (
        <div className="container mb-5">
            <h2 className="mt-5">Our Bus Ticket</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                    allBusTickets.map(ticketDetails => <TicketDetails
                        key={ticketDetails._id}
                        ticketDetails={ticketDetails}
                    ></TicketDetails>)
                }
            </div>
        </div>
    );
};

export default AllBusTicket;