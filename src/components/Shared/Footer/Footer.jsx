import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className=''>Student Special: Discounted rates <br />
            on tropical getaways!
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam <br /> minus harum architecto repellendus soluta, molestiae ea</p>

            <div className='footer-ul-div'>
                <ul className='footer-ul'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Sales and Refunds</li>
                    <li>Legal</li>
                </ul>
                <ul className='footer-ul'>
                    <li className='navlink'>About</li>
                    <li className='navlink'>Schedules</li>
                    <li className='navlink'>Pricing</li>
                    <li className='navlink'>Membership</li>
                    <li className='navlink'>Joins</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
