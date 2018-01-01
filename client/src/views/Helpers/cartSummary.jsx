import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { toast } from 'materialize-css'
import { showCart } from '../../actions/helpers'
import './cartSummary.css'

class CartSummary extends Component {

    constructor(props) {
        super(props)

        this.closeCart = this.closeCart.bind(this)
    }


    closeCart() {
        this.props.showCart(false)
    }

    render() {
        return (
                <div>
                    {
                        this.props.helpers.showCart
                        ? (
                            <ul className="cart">
                                <li><span onClick={this.closeCart} className='material-icons right'>close</span></li>
                                <li className='cart-header'>
                                    <span className='flow-text'>Your Cart</span>
                                    <hr/>
                                </li>
                                {
                                    this.props.cart.map(item => {
                                        return (
                                            <li key={item._id}>
                                                <div className='flow-text item-title'>
                                                    {item.title} {item.color}
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                <li className='cart-footer'>
                                    <hr/>
                                    <div>
                                        <button onClick={this.closeCart} className='left btn waves-effect waves-dark red darken-2'>Close</button>
                                        <button className='right btn waves-effect waves-light red'>Checkout</button>
                                    </div>
                                </li>
                            </ul>
                        )
                        : null
                    }
                </div>
        )
    }
}

const mapStateToProps = ({ cart, helpers }) => ({ cart, helpers })

export default connect(mapStateToProps, { showCart })(CartSummary)