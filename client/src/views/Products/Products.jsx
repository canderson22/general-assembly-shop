import React, { Component } from 'react'
import { connect } from 'react-redux'
import splitArray from 'split-array'

import './products.css'

import Loading from '../Helpers/Loading'
import CartSummary from '../Helpers/cartSummary'
import Product from './Product'

import { getProducts } from '../../actions/products'
import { showSearch } from '../../actions/helpers'


class Products extends Component {
    
     componentDidMount() {
         this.props.getProducts();
         this.props.showSearch(true)
     }

     componentWillUnmount() {
         this.props.showSearch(false)
     }

    render() {
        const products = splitArray(this.props.products, 3)
        return (
            <div className='Products'>
                {
                    this.props.cart.length > 0
                    ? <CartSummary />
                    : null
                }
                <h1 className='center-align'>GA Swag</h1>
                <div className='container'>
                    {
                        this.props.products
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

const mapStateToProps = ({ products, cart, helpers }) => ({ products, cart, helpers })

export default connect(mapStateToProps, { showSearch, getProducts })(Products)