import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './checkout.css'
import Select from './Select'

class Checkout extends Component {

    render() {
        var total = 0
        if (this.props.cart) {
            this.props.cart.forEach(item => total += (item.quantity * item.price))
            total = total.toFixed(2)
        }
        
        return (
            <div className='Checkout container'>
                <h4>Your cart subtotal is $ {total}</h4>
                <Link to='/'>Back</Link>
                <table className='highlight responsive-table'>
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
                                            $ {item.price}
                                        </td>
                                        <td className='center-align'>
                                            <Select item={item} />
                                            <br/>
                                            <button className='btn-floating red darken-3'><i className='tiny material-icons'>delete_forever</i> </button>
                                            <label className='remove-label'>Remove</label>
                                        </td>
                                        <td className='right-align'>
                                            $ {(item.price * item.quantity).toFixed(2)}
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

export default connect(mapStateToProps, null)(Checkout)