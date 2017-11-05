import React, { Component } from 'react'

import './products.css'
import Loading from '../Helpers/Loading'
import Product from './Product'
import blackBottle from './productImages/ga_black_bottle.png'
import whiteBottle from './productImages/white_bottle.png'
import red from './productImages/red_bottle.png'



class Products extends Component {
    state = { 
        products: [
            {
                id: 1,
                title: 'fo'
            },
            {
                id: 2,
                title: 'fo'
            },
            {
                id: 3,
                title: 'fo'
            },
            {
                id: 4,
                title: 'fo'
            }
        ]
     }

     componentDidMount() {
         
         
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
        const products = this.createProductMatrix(this.state.products)
        
        return (
            <div className='Products'>
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
                                                return <Product key={item.id} item={item} />
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

export default Products