import React from 'react';
import Banner from '../../Banner/Banner';
import Drivers from '../../Drivers/Drivers';
import TravellersReports from '../TravellersReports/TravellersReports';
import AllBusTicket from '../AllBusTicket/AllBusTicket';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBusTicket></AllBusTicket>
            <Drivers></Drivers>
            <TravellersReports></TravellersReports>
        </div>
    );
};

export default Home;