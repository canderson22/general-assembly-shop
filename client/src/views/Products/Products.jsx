import React, { Component } from 'react'
import { connect } from 'react-redux'
import splitArray from 'split-array'
import './products.css'
import { toast } from 'materialize-css'

import Loader from '../Helpers/Loading'

import { getProducts } from '../../actions/products'


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }

    }
    
     componentDidMount() {
         this.props.getProducts(() => {
             this.setState({loading: false})
         }, (error) => {
            this.setState({loading: true})
            toast(`<h5>${error}</h5>`, 2000, 'rounded red-text')
         });
     }

     componentWillUnmount() {
     }
     
    viewItem(_id) {
        this.props.history.push(`product/${_id}`)
    }

    render() {
        const ProductRows = splitArray(this.props.products, 3)
        return (
            <div className='Products'>
                {
                    this.state.loading
                    ? <Loader />
                    : (
                        <div className='container'>
                            <h1 className='center-align'>Swag Collection</h1>
                            {
                                ProductRows.map((row, i) => {
                                    return (
                                        <div className='row' key={i}>
                                            {
                                                row.map(product => {
                                                    return (
                                                        <div className='col s12 m4' key={product._id}>
                                                            <div className="card">
                                                                <div className="card-image">
                                                                    <img src={product.image} alt='' />
                                                                </div>
                                                                <div className="card-content">
                                                                    <span className='card-title'>
                                                                        {product.title}
                                                                    </span>
                                                                    <section className='center-align'>
                                                                        ${product.price.toFixed(2)}
                                                                    </section>
                                                                </div>
                                                                <div className='card-action center-align'>
                                                                    <button onClick={this.viewItem.bind(this, product._id)} className='btn waves-effect waves-light red'>View Item</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = ({ products }) => ({ products })
export default connect(mapStateToProps, { getProducts })(Products)
