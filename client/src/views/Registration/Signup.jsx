import React from 'react'
import { Link } from 'react-router-dom'
import './registration.css'
import { toast } from 'materialize-css'


import { updateSignupFields, userSigninFailure } from '../../actions/registration'
import { userSignin } from '../../actions/user'
import { connect } from 'react-redux'

class Signup extends React.Component {

    onInputChange(e) {
        this.props.updateSignupFields({
            ...this.props.signup.fields,
            [e.target.name]: e.target.value
        })
        this.props.userSigninFailure('')
        
    }

    validateInputs(obj) {
        if (obj.password !== obj.confirmation_password) {
            toast(`<h5>Make sure passwords match</h5>`, 2000 ,'left rounded red-text')
            return false
        }
        if (obj.phone) {
            if (!/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(obj.phone)) {
                toast(`<h5>Incorrect phone number</h5>`, 2000 ,'left rounded red-text')
                return false
            }
        }
        if(!obj.f_name || !obj.l_name || !obj.password || !obj.email) {
           toast(`<h5>Please fill in all required inputs</h5>`, 2000 ,'left rounded red-text')
           return false
        }
        return true

    }

    onFormSubmit(e) {
        e.preventDefault();
        const fields = this.props.signup.fields
        if(this.validateInputs(fields)) {
            this.props.userSignin(fields, () => {
                this.props.updateSignupFields({fields: {}})
                this.props.userSigninFailure('')
                this.props.history.push('/')
            }, (err) => {
                this.props.userSigninFailure(err)
            })
        }
    }

    render() {
        console.log(this.props.signup.errorMsg)
        const { f_name, l_name, email, phone, password, confirmation_password } = this.props.signup.fields
        const { errorMsg } = this.props.signup
        return (
            <div className='Signup container'>
            <h1>Sign Up</h1>
            {
                errorMsg
                ? <div className='center-align alert-danger'>{errorMsg}</div>
                : null
            }
            
            <div className='row'>
                <form className='col s12' onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)} >
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>account_circle</i>
                            <input type="text" name='f_name' value={f_name} className='validate'/>
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>person_pin</i>
                            <input type="text" name='l_name' value={l_name} className='validate'/>
                            <label htmlFor="icon_prefix">Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>email</i>
                            <input type="email" name='email' value={email} className='validate'/>
                            <label htmlFor='icon_prefix'>Email</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>phone</i>
                            <input type="tel" name='phone' value={phone} className='validate' />
                            <label htmlFor='icon_prefix'>Phone (optional) xxx-xxx-xxxx</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>lock</i>
                            <input type="password" name="password" value={password} />
                            <label htmlFor='icon_prefix'>Password</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>lock_outline</i>
                            <input type="password" name="confirmation_password" value={confirmation_password} />
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
            </div>
        )
    }
}

const mapStateToProps = ({signup}) => ({signup})

export default connect(mapStateToProps, { updateSignupFields, userSignin, userSigninFailure })(Signup)