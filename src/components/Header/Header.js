import React from 'react';
import logo from '../../images/image_800x200.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/club-team">Club Team</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;