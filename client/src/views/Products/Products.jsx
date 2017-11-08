import React, { Component } from 'react'
import { connect } from 'react-redux'

import './products.css'

import Loading from '../Helpers/Loading'
import CartSummary from '../Helpers/cartSummary'
import Product from './Product'

import { getProducts } from '../../actions/products'


class Products extends Component {
    
     componentDidMount() {
         this.props.getProducts()
     }

     createProductMatrix(arr) {
        const productMatrix = []
        let productArr = []
        arr.forEach((item, i) => {
            productArr.push(item)
            if((i + 1) % 3 === 0) {
                productMatrix.push(productArr)
                productArr = []
            }
        })
        productMatrix.push(productArr)
        return productMatrix
     }

    render() {
        const products = this.createProductMatrix(this.props.products)
        
        return (
            <div className='Products'>
                {
                    this.props.cart.length > 0
                    ? <CartSummary />
                    : null
                }
                <h1>Products</h1>
                <div className='container'>
                    {
                        products
                        ? (
                                products.map((row, i) => {
                                return (
                                    <div className='row' key={i}>
                                        {
                                            row.map(item => {
                                                return <Product key={item._id} item={item} />
                                            })
                                        }
                                    </div>
                                )    
                            })
                        )
                        : <Loading />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ products, cart }) => ({ products, cart })

export default connect(mapStateToProps, { getProducts })(Products)