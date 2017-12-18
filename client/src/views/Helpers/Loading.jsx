import React from 'react'
import { Preloader } from 'react-materialize'
import './helperCSS.css'

export default () => {
    return (
        <div className='loader center-align'>
            <Preloader flashing />
        </div>
    )
}