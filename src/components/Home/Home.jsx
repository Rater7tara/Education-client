import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Testimonial from '../Testimonial/Testimonial';
import Tropical from '../Tropical/Tropical';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Tropical></Tropical>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;