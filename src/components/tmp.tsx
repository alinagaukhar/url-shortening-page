import React from 'react';
import logo from '../images/logo.svg'
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="app-header">
            <nav className='navbar navbar-expand-lg'>
                <img src={logo} alt="logo"/>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <div className='collapse navbar-collapse' id="navbarNav">
                    <nav className='navbar-nav'>
                        <li className='nav-links nav-item'>
                            <a href='#'>Features</a>
                            <a href ='#'>Pricing</a>
                            <a href='#'>Resources</a>
                        </li>
                        <hr className='separator-mobile'></hr>
                        <li className='actions nav-item'>
                            <button className='btn btn-login btn-secondary btn-small'>Log in</button>
                            <button className='btn btn-primary btn-small'>Sign up</button>
                        </li>
                    </nav>
                </div>
            </nav>
            <nav id='nav-visible'>
                <button type="button" 
                className='toggle-nav'
                aria-expanded={isMenuOpen}
                aria-controls="navbar-nav"
                onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
            </div>
    )
}
export default Header