import React from 'react'

export default (props) => {
    const { item } = props
    return (
            <div className='col s4'>
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
                        {
                            item.color
                            ? <span className='badge'>{item.color}</span>
                            : null
                        }
                    <button className='waves-effect waves-dark btn red white-text'>
                        <i className='material-icons right'>add_shopping_cart</i>Add to
                    </button>
                    </div>
                </div>
            </div>
        )
}