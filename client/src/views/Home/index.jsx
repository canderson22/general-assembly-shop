import React from 'react'
import { Parallax } from 'react-materialize'

import './home.css'

const Home = () => {
    return (
        <div className='HOME'>
            <Parallax className='valign-wrapper' imageSrc='https://s3.amazonaws.com/ga-products/ga-background.jpg' />
           <div className="container">
                <div className="section">
                    <div className='center-align'>
                        <img src="https://s3.amazonaws.com/ga-products/ga-logo.jpeg" alt="ga logo"/>
                        <h1 className='heading'>SHOP</h1>
                        <div className='divider'></div>
                        <h2>Your one way stop and shop for swagged out gear and supplies</h2>
                    </div>     
                </div>
            </div>
            <Parallax className='valign-wrapper' imageSrc='https://s3.amazonaws.com/ga-products/shirt-bg.jpg' />
           <div className="container">
                <div className="section">
                    <div className='center-align'>
                        <h2>
                            Don't be the one to miss out!
                        </h2>
                        <p className='flow-text'>
                            Get all your gear quick and easy. Don't miss out on this year's end of year sale.
                        </p>
                    </div>     
                </div>
            </div>
            <Parallax className='valign-wrapper' imageSrc='https://ga-shop.s3.amazonaws.com/production/store/locationmasthead/11/image/retina-3af887010db0db7a24bcae3ab47100a7.jpg' />
        </div>
    )
}

export default Home