import React from 'react';
import Services from './Services/Services';
import Banner from './Banner/Banner';
import Career from './Career/Career';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Career/>
        </div>
    );
};

export default Home;