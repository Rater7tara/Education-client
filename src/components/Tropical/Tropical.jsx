import React from 'react';
import './Tropical.css';

const Tropical = () => {
    return (
        <div>
            <section className="tropical-sec">
                <div className="tropical-content">
                    <div>
                        <div className="item">
                            <img src="https://iili.io/JI5a0EF.png" alt="" />
                            <div className='Trop-img-text'>
                                <h2>Jenny Wilson</h2>
                                <p>Early in my career...I had to choose between an honest </p>
                            </div>

                        </div>
                        <div className="item">
                            <img src="https://iili.io/JI5aaLP.png" alt="" />
                            <div className='Trop-img-text'>
                                <h2>Jenny Wilson</h2>
                                <p>Early in my career...I had to choose between an honest </p>
                            </div>

                        </div>
                        <div className="item">
                            <img src="https://iili.io/JI5a1rg.png" alt="" />
                            <div className='Trop-img-text'>
                                <h2>Jenny Wilson</h2>
                                <p>Early in my career...I had to choose between an honest </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="second-text">
                    <h1>Tropical Adventure</h1>
                    <h2>For students.</h2>

                    <h3>Student Tropical Vacation: Relax and Recharge</h3>

                    <ul>
                        <li className='trop-li'>Explore breathtaking landscapes and pristine beaches.</li>
                        <li className='trop-li'>Enjoy exclusive discounts on accommodations.</li>
                        <li className='trop-li'>Participate in exciting water sports and activities.</li>
                        <li className='trop-li'>Connect with other students and build lasting memories.</li>
                        <li className='trop-li'>Access 24/7 support and assistance during your trip.</li>
                        <li className='trop-li'>Create an unforgettable experience with Tropical Adventure!</li>
                    </ul>

                    <button className='button-banner'>Explore More</button>
                </div>
            </section>
        </div>
    );
};

export default Tropical;