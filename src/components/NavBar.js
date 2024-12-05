import React from 'react';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contacts">Contacts</a></li>
                <li><a href="#chatbot">Chat Bot</a></li>
            </ul>
        </nav>
    );
};

export default NavBar; 