import React from 'react'
import { Link } from 'react-router-dom'
import './registration.css'
import { toast } from 'materialize-css'

import Loader from '../Helpers/Loading';

import { userSignin } from '../../actions/user'
import { connect } from 'react-redux'

class Signup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            password_confirm: '',
            submitted: false,
            errorMessage: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(e) {
       this.setState({
           [e.target.name]: e.target.value
       }) 
    }

    validateInputs(obj) {
        if (obj.password !== obj.password_confirm) {
            toast(`<h5>Make sure passwords match</h5>`, 2000 ,'left rounded red-text')
            return false
        }
        if (obj.phone) {
            if (/\d{10}$/.test(obj.phone) || !/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(obj.phone)) {
                toast(`<h5>Incorrect phone number</h5>`, 2000 ,'left rounded red-text')
                return false
            }
        }
        if(!obj.firstName || !obj.lastName || !obj.password || !obj.email) {
           toast(`<h5>Please fill in all required inputs</h5>`, 2000 ,'left rounded red-text')
           return false
        }
        return true

    }

    onFormSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, phone, password } = this.state
        if(this.validateInputs(this.state)) {
            this.setState({submitted: true})
            this.props.userSignin({
                firstName,
                lastName,
                email,
                phone,
                password
            }, () => {
                this.props.history.push('/')
            }, (error) => {
                this.setState({submitted: false})
                toast(`<h5>${error}</h5>`, 2000, 'left rounded red-text')
            });
        }
        
    }

    render() {
        const { firstName, lastName, email, phone, password, password_confirm } = this.state
        return (
            <div className='Signup container'>
            {
                this.state.submitted
                ? <Loader />
                : (
                    <div className='row'>
                    <h1>Sign Up</h1>            
                    <form className='col s12' onChange={this.onInputChange} onSubmit={this.onFormSubmit} >
                        <div className='row'>
                            <div className='input-field col s6'>
                                <i className='material-icons prefix'>account_circle</i>
                                <input type="text" name='firstName' defaultValue={firstName} className='validate'/>
                                <label htmlFor="icon_prefix">First Name</label>
                            </div>
                            <div className='input-field col s6'>
                                <i className='material-icons prefix'>person_pin</i>
                                <input type="text" name='lastName' defaultalue={lastName} className='validate'/>
                                <label htmlFor="icon_prefix">Last Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <i className='material-icons prefix'>email</i>
                                <input type="email" name='email' defaultalue={email} className='validate'/>
                                <label htmlFor='icon_prefix'>Email</label>
                            </div>
                            <div className='input-field col s6'>
                                <i className='material-icons prefix'>phone</i>
                                <input type="tel" name='phone' defaultalue={phone} className='validate' />
                                <label htmlFor='icon_prefix'>Phone (optional) xxx-xxx-xxxx</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <i className='material-icons prefix'>lock</i>
                                <input type="password" name="password" defaultalue={password} />
                                <label htmlFor='icon_prefix'>Password</label>
                            </div>
                            <div className='input-field col s6'>
                                <i className='material-icons prefix'>lock_outline</i>
                                <input type="password" name="password_confirm" defaultalue={password_confirm} />
                                <label htmlFor='icon_prefix'>Password Confirmation</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col s6'>
                                <p className='flow-text'>
                                    Already signed up? <Link className='btn red light-2' to='/login'>Log In</Link>
                                </p>
                            </div>
                            <div className='col s6'>
                                <button className="right btn waves-effect waves-light red darken-3" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                )
            }
            </div>
        )
    }
}

export default connect(null, { userSignin })(Signup)