import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'materialize-css'

import Loader from '../Helpers/Loading'

import { userLogin } from '../../actions/user'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            submitted: false
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

     onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     onFormSubmit(e) {
        e.preventDefault()
        const { email, password } = this.state
        if (email && password) {
            this.setState({submitted: true})
            this.props.userLogin({
                email,
                password
            }, () => {
                this.props.history.push('/')
            }, (error) => {
                this.setState({
                    submitted: false,
                    email: '',
                    password: ''
                })
                toast(`<h5>${error}</h5>`, 2000, 'rounded red-text')
            })
        } else {
            toast('<h5>Please fill in all fields.</h5>', 2000, 'rounded red-text')
        }
     }



    render() {
        const { email, password } = this.state
        return (
            <div className='Login container'>
            {
                this.state.submitted
                ? <Loader />
                : (
                    <form onChange={this.onInputChange} onSubmit={this.onFormSubmit} >
                    <h1>Log In</h1>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>email</i>
                            <input type="email" name='email' defaultValue={email} className='validate'/>
                            <label htmlFor="icon_prefix">Email</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>lock</i>
                            <input type="password" name='password' defaultValue={password} className='validate'/>
                            <label htmlFor="icon_prefix">Password</label>
                        </div>
                        <div className='row'>
                            <div className='col s6'>
                            <p className='flow-text'>
                                    Haven't sign up yet? <Link className='btn red light-2' to='/signup'>Sign Up</Link>
                                </p>
                            </div>
                            <div className='col s6'>
                                <button className="right btn waves-effect waves-light red darken-3" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                )
            }
            </div>
        );
    }
}

export default connect(null, { userLogin })(Login)
