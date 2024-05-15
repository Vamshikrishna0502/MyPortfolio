import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './index.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container">
                <h1 className="logo">Vamshikrishna</h1>
                <nav>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About Me</a></li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <FaBars/>
                </div>
            </div>
        </header>
    );
};

export default Header;
