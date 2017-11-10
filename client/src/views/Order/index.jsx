import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../Helpers/Loading'
import { clearCart } from '../../actions/cart'

class Order extends Component {

    componentDidMount() {
        this.props.clearCart()
    }

    render() {
        const order = this.props.order.order
        // console.log(this.props.order)
        return (
            <div className='Order'>
                {order
                    ? (
                        <div className='Reciept container'>
                            <h2>Order Confirmation</h2>
                            <div className='divider'></div>
                            <h4>Ordered Items</h4>
                            <p className='flow-text'>
                                <ul className='items'>
                                    { order.items.map(item => {
                                        return <li key={item._id}>{item.title} | {item.color} <span className='chip'>{item.qty}</span></li>
                                    })}
                                </ul>
                            </p>
                            <div className='divider'></div>
                            <h4>Payment ID</h4>
                            <p className='flow-text'>
                                #  {order.paymentId}
                            </p>
                            <div className='divider'></div>
                            <h4>Confirmation Number</h4>
                            <p className='flow-text'>
                                # {order._id}
                            </p>
                            <div className='divider'></div>
                            <p className='flow-text center-align'>
                                Thank you for shopping at GA, your swag is on the way!
                            </p>
                        </div>
                    )
                    : <Loading />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ order }) => ({ order })

export default connect(mapStateToProps, { clearCart })(Order)