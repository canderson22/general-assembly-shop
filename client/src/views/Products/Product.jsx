import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addToCart } from '../../actions/cart'
import { updateProduct } from '../../actions/products'
import { showCart } from '../../actions/helpers'
import { toast } from 'materialize-css'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            quantity: 1
        }

        this.addQty = this.addQty.bind(this)
        this.minusQty = this.minusQty.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        const { _id } = this.props.match.params
        const product = this.props.products.filter(product => product._id === _id)[0]
        this.setState({product})
    }

    addQty() {
        const { quantity, product } = this.state
        if (quantity === product.inventory) {
            return
        }
        this.setState({quantity: quantity + 1})
    }

    minusQty() {
        const { quantity, product } = this.state
        if (quantity === 1) {
            return
        } else {
            this.setState({quantity: quantity - 1})
        }
    }

    addToCart() {
        var { product, quantity } = this.state
        var addedItem = Object.assign({}, product, {quantity})
        this.props.addToCart(addedItem, () => {
            toast(`<h5>Added to Cart X${quantity}</h5>`, 2000, 'rounded text-red')
            this.props.showCart(true)
            product.inventory -= quantity
            this.setState({
                quantity: 1,
                product
            })
        })
    }

    componentWillUnmount() {
        const { product } = this.state
        this.props.updateProduct(product)
    }

    render() {
        const { product, quantity } = this.state
        return (
            <div className='Product container z-depth-5'>
                <Link className='back-link btn btn-floating red darken-2' to='/products'><i className='material-icons'>arrow_back</i></Link>
                <div className='row'>
                    <div className='col m6 s12 box'>
                        <div className='center-align'>
                            <img className="responsive-img hoverable" src={product.image} />
                        </div>
                        <div className='center-align'>
                            <h5>{product.title}</h5>
                            <p className='flow-text'>{product.desc}</p>
                            <span className='flow-text'>
                                Color <a className={`btn btn-floating ${product.color}`}></a>
                                <br/><br/>
                                In Stock {product.inventory}
                                <br/>
                                <br/>
                                Price ${product.price}
                            </span>
                        </div>
                    </div>
                    <div className='col m6 s12 box'>
                        <h4 className='center-align'>Add it to your cart</h4>
                        <div className='center-align'>
                            {
                                this.state.product.inventory > 0
                                ? (
                                    <div>
                                        <p className='flow-text'>Quantity</p>
                                        <div className='quantity center-align'>
                                            <button onClick={this.minusQty} className='btn btn-floating red'><i className="material-icons">remove</i></button>
                                            <div className='qty-box'>{quantity}</div>
                                            <button onClick={this.addQty} className='btn btn-floating red'><i className="material-icons">add</i></button>
                                        </div>
                                        <div className='center-align btn-box'>
                                            <button onClick={this.addToCart} className='btn waves-effect waves-dark red'>Add to Cart</button>
                                        </div>
                                    </div>
                                )
                                : (
                                    <div className='center-align btn-box'>
                                        <button className="btn disabled" disabled="disabled">Out of Stock</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => ({ products })

export default connect(mapStateToProps, { addToCart, updateProduct, showCart })(Product)