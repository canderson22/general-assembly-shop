import React, { Component } from 'react'
import { connect } from 'react-redux'

class Order extends Component {
    render() {
        const order = this.props.order.order
        console.log(this.props.order)
        return (
            <div className='Order'>
                <h1>Your Reciept</h1>
                {order
                    ? (
                        <div>
                            <p>{order._id}</p>
                        </div>
                    )
                    : <p>Loading...</p>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ order }) => ({ order })

export default connect(mapStateToProps)(Order)