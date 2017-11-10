import React from 'react'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { showCart } from '../../actions/helpers'
import { processPayment, completeOrder, processing } from '../../actions/order'

import Processing from '../Helpers/Processing'
import './checkout.css'

// const STRIPE_PUBLISHABLE = 'pk_test_6BHnRpbfLZSr0IIv8mCjwC8o'


class Checkout extends React.Component {



    onBack() {
        this.props.showCart(!this.props.helpers.viewCart)
    }

    onClose() {
        this.props.processing(true)
    }

    onToken(token) {
        const amount = this.props.cart.map(p => p.qty * p.price).reduce((total, v) => total += v) * 100
        this.props.processPayment(token, amount, (paymentId) => {
            const { user, cart } = this.props
            const order = {
                paymentId: paymentId,
                userId: user._id,
                items: cart
            }
            this.props.completeOrder(order, () => {
                this.props.history.push('/completeOrder')
            })
        })
    }

    componentWillUnmount() {
        this.props.showCart(!this.props.helpers.viewCart)
    }

    render() {
        const { cart } = this.props
        let total = 0
        let amount = 0
        if(cart.length > 0) {
            total = cart.map(item => item.qty * item.price).reduce((total, value) => total += value)
            amount = total * 100
        }
        return (
            <div className='container'>
                {
                    this.props.order.processing
                    ? (
                        <h1>
                            Your Order is being Processed
                            <Processing />
                        </h1>
                    )
                    : null
                }
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
                    <StripeCheckout
                      className='right'
                      descritption='GA Swag'
                      stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
                      amount={amount}
                      currency='USD'
                      token={this.onToken.bind(this)}
                    >
                    <button onClick={this.onClose.bind(this)} className='right btn green'>Pay with Card</button>
                    </StripeCheckout>
                </div>
            </div>
        )

    }
}


const mapStateToProps = ({ user, cart, helpers, order }) => ({ user, cart, helpers, order })

export default connect(mapStateToProps, { showCart, processPayment, processing, completeOrder })(Checkout)