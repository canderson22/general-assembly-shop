import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'
import gaLogo from '../images/general-assembly-logo.png'

class Navbar extends Component {
    state = {
        currentUser: null
    }
    render() {
        return (
            <nav className='Navbar white text-black'>
                <div className='nav-wrapper'>
                    <div className='brand-logo left'>
                        <img src={gaLogo} alt=""/>
                    </div>
                    <a data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
                    {
                        this.state.currentUser
                        ? (
                            <span>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/'>About</Link></li>
                            </ul>
                            <form className='right red hide-on-med-and-down'>
                                <div className="input-field">
                                <input id="search" type="search" placeholder='Search for items' />
                                <label className="label-icon"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                                </div>
                            </form>
                            </span>
                        )
                        : (
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                                <li><Link to='/'>About</Link></li>
                            </ul>  
                        )
                    }
                    <ul className="side-nav" id="mobile-demo">
                        <li><img src={gaLogo} alt=""/></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/'>About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
