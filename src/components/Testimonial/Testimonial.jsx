import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <>
        <h1 className='test-h'>Testimonials</h1>
        <div className="testimonial-container">
            <div className="testimonial-card">
                <img src="https://iili.io/JI5aRmQ.png" alt="Person 1" className="testimonial-image" />
                <h3 className="testimonial-name">John Doe</h3>
                <p className="testimonial-review">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                <div className="testimonial-stars">★★★★☆</div>
            </div>

            <div className="testimonial-card">
                <img src="https://iili.io/JI5aAkx.png" alt="Person 2" className="testimonial-image" />
                <h3 className="testimonial-name">Jane Smith</h3>
                <p className="testimonial-review">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                <div className="testimonial-stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
                <img src="https://iili.io/JI5a7IV.png" alt="Person 3" className="testimonial-image" />
                <h3 className="testimonial-name">Alex Johnson</h3>
                <p className="testimonial-review">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                <div className="testimonial-stars">★★★★★</div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;
