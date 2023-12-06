import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-main'>
                <div className='banner-text'>
                    <h4>Discover the beauty of tropics</h4>
                    <h1>Tropical <br /> Destinations</h1>
                    <h2>For Students</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Labore repellat quibusdam maxime eos molestiae deserunt?</p>

                    <button className='button-banner'>Sign Up</button>
                </div>

                <div className='card banner-img'>
                    <img className='img-banner' src="https://iili.io/JI5aTdb.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;