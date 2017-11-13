import React from 'react'
import { Preloader } from 'react-materialize'

export default () => {
    return (
        <div className='center-align'>
            <Preloader flashing />
        </div>
    )
}