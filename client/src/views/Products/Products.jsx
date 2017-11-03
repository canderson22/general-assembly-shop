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
            {id:1, title: 'black bottle', desc: 'a black bottle for water', image: blackBottle},
            {id:2, title: 'red bottle', desc: 'a black bottle for water', image: red},
            {id:3, title: 'white bottle', desc: 'a black bottle for water', image: whiteBottle}
        ]
     }
    render() {

        
        return (
            <div className='Products'>
                <h1>Products</h1>
                <div className='container'>
                    
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