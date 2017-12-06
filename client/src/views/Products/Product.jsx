import React from 'react'
import { connect } from 'react-redux'
import { quantityChange, updateProducts } from '../../actions/products'
import { addToCart } from '../../actions/cart'
import { toast } from 'materialize-css'

class Product extends React.Component {

    onAddItem(item) {
        if (item.qty > 0) {
            this.props.addToCart(item)
            this.props.updateProducts(item, () => {
    
            })
        } else {
            toast(`<h5>Please add in a quantity</h5>`, 2000 ,'left rounded red-text')
        }
    }

    onInputChange(e) {
        var id = e.target.getAttribute('data-target')
        this.props.quantityChange(id, Number(e.target.value))
    }

    render() {
        const { item } = this.props
        
        return (
                <div className='col s12 m4'>
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
                          <div className='container-fluid'>
                            <div className='row'>
                                <div className='col s12 m9'>
                                    {
                                        item.inStock
                                        ? (
                                            <button onClick={this.onAddItem.bind(this, item)} className='waves-effect waves-dark btn red white-text'>
                                                <i className='material-icons right'>add_shopping_cart</i><span className='add-to'>Add to</span>
                                            </button>
                                        )
                                        : (
                                            <span>Out of Stock</span>
                                        )
                                    }
                                    <h6>Price: ${Number(item.price).toFixed(2)}</h6>
                                </div>
                                <div className='col s12 m3'>
                                    <label htmlFor="">Quantity</label>
                                    {/* change the input back to zero once added to cart */}
                                    <input onChange={this.onInputChange.bind(this)} data-target={item._id} value={item.qty} type="number" max={item.inStock} min="0" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s12'>
                                    
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps, { addToCart, quantityChange, updateProducts })(Product)
