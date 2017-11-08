import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showCart } from '../../actions/helpers'


import './checkout.css'

class Checkout extends React.Component {

    onBack() {
        this.props.showCart(!this.props.helpers.viewCart)
    }

    render() {
        const { cart } = this.props
        let total = 0
        if(cart.length > 0) {
            total = cart.map(item => item.qty * item.price).reduce((total, value) => total += value)
        }
        return (
            <div className='container'>
                <h2 className='center-align'>Final Summary</h2>
                <table className='checkout responsive-table striped'>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Desc</th>
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.map(item => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.color}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price * item.qty}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            {
                                total > 0
                                ? <span>Total ${total}</span>
                                : null
                            }
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='btn-group'>
                    <Link onClick={this.onBack.bind(this)} to='/shop' className='left btn blue'>Back</Link>
                    <Link to='/order' className='right btn green'>Purchase</Link>
                </div>
            </div>
        )

    }
}


const mapStateToProps = ({ cart, helpers }) => ({ cart, helpers })

export default connect(mapStateToProps, { showCart })(Checkout)