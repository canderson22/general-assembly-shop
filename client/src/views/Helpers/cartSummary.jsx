import React, { Component } from 'react'
import { connect } from 'react-redux'

import './cartSummary.css'

class CartSummary extends Component {
    state = {
        cart: true
    }

    onClick() {
        this.setState({cart: true})
    }
    render() {
        console.log(this.props.cart)
        return (
            <div>
                {/* {
                    this.props.cart.cartEmpty
                    ? (
                        <div className='cart'>
                            <header className='cart-header red white-text'>
                                <h4>Your Cart</h4>
                                <button><i className='close material-icons'>close</i></button>
                            </header>
                            <div>
                                <h1>hello</h1>
                            </div>
                            <footer>
                                <button>Check out</button>
                            </footer>
                        </div>
                    )
                    : <button onClick={this.onClick.bind(this)} className='btn btn-cart red darken-3'>View Cart</button>
                } */}
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(CartSummary)