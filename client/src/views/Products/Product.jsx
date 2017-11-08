import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cart'

class Product extends React.Component {

    onAddItem(item) {
        const newItem = Object.assign({}, item, {qty: 1})
        this.props.addToCart(newItem)
    }

    render() {
        const { item } = this.props
        return (
                <div className='col s4'>
                    <div className="card">
                        <div className="card-image">
                            <img src={item.image} alt='' />
                        </div>
                        <div className="card-content">
                            <span className='card-title'>
                                {item.title}
                            </span>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                        <div className="card-action">
                            {
                                item.color
                                ? <span>
                                    <span className='badge'>{item.color}</span> <br/>
                                    <span className='badge'>${item.price}</span>
                                  </span>
                                : null
                            }
                        <button onClick={this.onAddItem.bind(this, item)} className='waves-effect waves-dark btn red white-text'>
                            <i className='material-icons right'>add_shopping_cart</i>Add to
                        </button>
                        </div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps, { addToCart })(Product)