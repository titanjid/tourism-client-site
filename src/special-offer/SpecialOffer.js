import React, { useEffect } from 'react';
import { useState } from 'react';
import Offer from './offer/Offer';

const SpecialOffer = () => {
    const [offers,setOffers]=useState([]);
    useEffect(()=>{
        fetch("https://warm-shelf-74484.herokuapp.com/specialOffer")
        .then(res => res.json())
        .then(data => setOffers(data))
    },[])
    return (
        <div className="container mb-5">
            <h2 className="mt-5">Our Special Offer</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                    offers.map(offer => <Offer
                        key={offer._id}
                        offer={offer}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default SpecialOffer;