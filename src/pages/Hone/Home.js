import React from 'react';
import Banner from '../../Banner/Banner';
import SpecialOffer from '../../special-offer/SpecialOffer';
import AllBusTicket from './../AllBusTicket/AllBusTicket';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBusTicket></AllBusTicket>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;