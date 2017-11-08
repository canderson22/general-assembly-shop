import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showCart } from '../../actions/helpers'
import { removeFromCart } from '../../actions/cart'

import './cartSummary.css'

class CartSummary extends Component {

    onShowCart() {
        this.props.showCart(!this.props.helpers.viewCart)
    }

    onRemoveFromCart(_id) {
        this.props.removeFromCart(_id)
    }

    onCheckOut() {
        
    }
    render() {
        var { cart } = this.props
        let total = 0
        if(cart.length > 0) {
            total = cart.map(item => item.qty * item.price).reduce((total, value) => total += value)
        }
        const { viewCart } = this.props.helpers
        return (
            <div>
            {
                viewCart
                ? (
                    <div className='cart slide-in.from-right slide-in-content'>
                    <div className='cart-header'>
                        <div className='cart-title'>
                            <h5>Summary</h5>
                        </div>
                        <div className='cart-close'>
                            <button onClick={this.onShowCart.bind(this)} className='close'><i className='small material-icons'>close</i></button>
                        </div>
                    </div>
                    <div>
                        <table className='striped responsive-table'>
                            <thead>
                            <tr>
                                <th className='center-align'>Item Name</th>
                                <th className='center-align'>Item Price</th>
                                <th className='center-align'>Quantity</th>
                                <th className='center-align'>Price</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
    
                            <tbody>
                            {
                                cart.map(item => {
                                    return (
                                        <tr key={item._id}>
                                            <td className='center-align'>{item.title} ({item.color})</td>
                                            <td className='center-align'>{item.price}</td>
                                            <td className='center-align'>{item.qty}</td>
                                            <td className='center-align'>{item.qty * item.price}</td>
                                            <td><button onClick={this.onRemoveFromCart.bind(this, item._id)} className='btn btn-remove red'><i className='tiny material-icons'>remove_shopping_cart</i></button></td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>
                                    <Link onClick={this.onCheckOut.bind(this)} to='/checkout' className='btn orange lighten-1'>Check Out</Link>
                                </td>
                                <td className='left-align'>Total: ${total}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                )
                : <button className='btn-cart btn red darken-3' onClick={this.onShowCart.bind(this)}>View Cart</button>
            }
        </div>
        );
    }
}

const mapStateToProps = ({ cart, helpers }) => ({ cart, helpers })

export default connect(mapStateToProps, { showCart, removeFromCart })(CartSummary)