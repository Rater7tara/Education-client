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
                <p className="testimonial-review">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur auctor."</p>
                <div className="testimonial-stars">★★★★☆</div>
            </div>

            <div className="testimonial-card">
                <img src="https://iili.io/JI5aAkx.png" alt="Person 2" className="testimonial-image" />
                <h3 className="testimonial-name">Jane Smith</h3>
                <p className="testimonial-review">"Vestibulum scelerisque odio sit amet efficitur bibendum. Nulla facilisi."</p>
                <div className="testimonial-stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
                <img src="https://iili.io/JI5a7IV.png" alt="Person 3" className="testimonial-image" />
                <h3 className="testimonial-name">Alex Johnson</h3>
                <p className="testimonial-review">"Fusce nec mauris quis libero tincidunt tempus. Ut et nisl ac ex malesuada cursus."</p>
                <div className="testimonial-stars">★★★★★</div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;
