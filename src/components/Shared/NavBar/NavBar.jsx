import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className="navbar">
            <button className="nav-toggle" onClick={handleNavCollapse}>
                &#9776;
            </button>
            <div className={`nav-bar ${isNavCollapsed ? 'collapsed' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Schedules</a>
                <a href="#">Membership</a>
                <a href="#">Pricing</a>
            </div>

            <div className="nav-bar right">
                <a href="#">Offers</a>
                <a href="#">Courses</a>
            </div>
        </nav>
    );
};

export default NavBar;
