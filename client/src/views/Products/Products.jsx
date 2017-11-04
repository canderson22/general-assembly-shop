import React, { Component } from 'react'

import './products.css'
import blackBottle from './productImages/ga_black_bottle.png'
import whiteBottle from './productImages/white_bottle.png'
import red from './productImages/red_bottle.png'



class Products extends Component {
    state = { 
        products: [
            {id:1, title: 'black bottle', desc: 'a black bottle for water', image: blackBottle},
            {id:2, title: 'red bottle', desc: 'a black bottle for water', image: red},
            {id:3, title: 'white bottle', desc: 'a black bottle for water', image: whiteBottle},
            {id:4, title: 'black bottle', desc: 'a black bottle for water', image: blackBottle},
            {id:5, title: 'red bottle', desc: 'a black bottle for water', image: red},
            {id:6, title: 'white bottle', desc: 'a black bottle for water', image: whiteBottle},
            {id:7, title: 'white bottle', desc: 'a black bottle for water', image: whiteBottle}
        ]
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
                    {products.map((row, i) => {
                        return (
                            <div key={i} className='row'>
                                {row.map((item) => {
                                    return (
                                        <div key={item.id} className='col s4'>
                                            <div className="card">
                                                <div className="card-image">
                                                    <img src={blackBottle} />
                                                    <span className="card-title">Card Title</span>
                                                </div>
                                                <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                                </div>
                                                <div className="card-action">
                                                <a href="/">This is a link</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    
                {/* <div className='row'>
                        <div className='col s4'>
                            <div className="card">
                                <div className="card-image">
                                    <img src={blackBottle} />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                <a href="/">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <div className="card">
                                <div className="card-image">
                                    <img src={red} />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                <a href="/">This is a link</a>
                                </div>
                            </div>
                        </div>
  
                        <div className='col s4'>
                        <div className="card">
                                <div className="card-image">
                                    <img src={whiteBottle} />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                <a href="/">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div> } */}
                </div>
            </div>
        );
    }
}

export default Products