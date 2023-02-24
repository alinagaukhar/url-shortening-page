import React from 'react';
import logo from '../images/logowhite.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

const links = [
    {title: 'Features', items: ['Link Shortening' , 'Branded Links', 'Analytics']},
    {title: 'Resources', items: ['Blog' , 'Developers', 'Support']},
    {title: 'Company', items: ['About' , 'Our team', 'Careers', 'Contact']},
]
function Footer() {
    return (
        <div className='app-footer'>
            
            <div className='content'>
                <img src={logo} className='logo' alt="logo" />
                <nav className='company-links'>
                { links.map(link => {
                    return (
                            <div className='group' key={link.title}>
                                <p className='title'>{link.title}</p>
                                <div className='links'>
                                { link.items.map( x => <a href='#' key={x}> {x} </a>)}
                                </div>
                            </div>

                    )
                })}
                </nav>
                <nav className='social-links'>
                    <a href='#'>
                        <img src={facebook} />
                    </a>
                    <a href='#'>
                        <img src={instagram} />
                    </a>
                    <a href='#'>
                        <img src={twitter} />
                    </a>
                    <a href='#'>
                        <img src={pinterest} />
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Footer