import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import axios from 'axios'
const STRIPE_PUBLISHABLE = 'pk_test_6BHnRpbfLZSr0IIv8mCjwC8o'

const onToken = (amount, description, cart, userId) => token => {
    console.log(token)
    axios.post('/api/orders/charge', {
        description,
        source: token.id,
        currency: 'USD',
        amount,
        userId,
        cart
    })
    .then(data => console.log('success', data))
    .catch(data => console.log('error', data))
}


class OrderForm extends Component {

    render() {
        let total = 0
        if(this.props.cart.length > 0) {
            total = this.props.cart.map(item => item.qty * item.price).reduce((total, value) => total += value)
        }
        let email = ''
        if(this.props.user) {
            email = this.props.user.email
        }
        
        return (
            <div className='OrderForm container'>
                <h3>Checkout</h3>
                <div className='row'>
                    <h3>Almost there to owning your GA Swag!</h3>             
                    <StripeCheckout 
                    email={email || 'unknown'}
                    description='GA Swag'
                    shippingAddress={true}
                    billingAddress={true}
                    amount={total * 100}
                    token={onToken(total, 'test')}
                    currency='USD'
                    stripeKey={STRIPE_PUBLISHABLE}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({  user, cart }) => ({ user, cart })

export default connect(mapStateToProps)(OrderForm)