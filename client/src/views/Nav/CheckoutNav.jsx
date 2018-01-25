import React from 'react';

import './navbar.css'
import gaLogo from '../images/general-assembly-logo.png'

const CheckoutNav = () => {
    return (
    <nav className='Navbar white text-black'>
        <div className='nav-wrapper'>
            <div className='brand-logo left'>
                <img src={gaLogo} alt="general assembly logo"/>
            </div>
        </div>
    </nav>
    )
}

export default CheckoutNav