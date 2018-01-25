import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCart } from '../../actions/cart'

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        e.preventDefault()
        var item = this.props.item
        var value = Number(e.target.value)
        // if (item.quantity === value) {
        //     return
        // }
        item.inventory += (item.quantity - value)
        item.quantity = value
        this.props.updateCart(item)
        this.setState({value})
    }

    componentDidMount() {
        // this.setState({value: this.props.item.quantity})
    }
    

    render() {
        const item = this.props.item
        console.log(item)
        var options = []
        for(let i = 1; i <= item.quantity; i++) {
            options.push({
                value: i,
                name: `qty: ${i}`
            })
        }
        return (
            <select name="" id="" value={item.quantity} onChange={this.onInputChange}> 
                <option value={item.quantity}>qty: {item.quantity}</option>
                    {
                        options.map((option, i) => {
                            return (
                                <option key={i} value={option.value}>{option.name}</option>
                            )
                        })
                    }
            </select>
        )
    }
}

export default connect(null, { updateCart })(Select)