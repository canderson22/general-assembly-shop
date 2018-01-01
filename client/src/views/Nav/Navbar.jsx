import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { showCart } from '../../actions/helpers'
import './navbar.css'
import gaLogo from '../images/general-assembly-logo.png'

class Navbar extends Component {
    closeCart() {
        this.props.showCart(true)
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
                        this.props.user
                        ? (
                            <span>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                {/* <li><Link to='/settings'>Settings</Link></li> */}
                                <li><Link to='/logout'>Log out</Link></li>
                            </ul>
                             {
                                 this.props.cart.length > 0
                                 ? (
                                    <div className='right'>
                                        <button onClick={this.closeCart.bind(this)} className='btn-floating btn-large red'><i className='large material-icons'>shopping_cart</i></button>
                                    </div>
                                 )
                                : null
                             }
                            </span>
                        )
                        : (
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
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

const mapStateToProps = ({ user, cart }) => ({ user, cart })

export default connect(mapStateToProps, { showCart })(Navbar);
