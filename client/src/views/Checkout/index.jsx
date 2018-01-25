import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { removeFromCart } from '../../actions/cart'
import { updateProduct } from '../../actions/products'

import './checkout.css'

class Checkout extends Component {

    removeFromCart(item) {
        this.props.removeFromCart(item, (product) => {
            this.props.updateProduct(product)
        })
    }

    render() {
        var total = 0
        if (this.props.cart) {
            this.props.cart.forEach(item => total += (item.quantity * item.price))
            total = total.toFixed(2)
        }
        
        return (
            <div className='Checkout container'>
                <div>
                    <Link className='btn btn-floating red darken-2 left' to='/'><i className='material-icons'>arrow_back</i></Link>
                    <h4 className='subtotal center-align'>Your cart subtotal is $ {total}</h4>
                </div>
                <table className='highlight table'>
                    <thead>
                    <tr>
                        <th className='center-align'>Details</th>
                        <th>Price</th>
                        <th className='center-align'>Quantity</th>
                        <th className='right-align'>Total</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.cart.map(item => {
                                return (
                                    <tr key={item._id} className='flow-text table-row'>
                                        <td className='valign-wrapper'>
                                            <img src={item.image} alt="items" className='left checkout-img'/>
                                            <p>
                                                {item.desc}
                                            </p>
                                        </td>
                                        <td>
                                            <span className='dollar-sign'>$</span> {item.price}
                                        </td>
                                        <td className='center-align'>
                                            <span>{item.quantity}</span>
                                            <hr/>
                                            <button onClick={this.removeFromCart.bind(this, item)} className='btn-floating red darken-3'><i className='tiny material-icons'>delete_forever</i> </button>
                                            <label className='remove-label'>Remove</label>
                                        </td>
                                        <td className='right-align'>
                                           <span className='dollar-sign'>$</span> {(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps, { removeFromCart, updateProduct })(Checkout)