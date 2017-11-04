import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateSignupFields, userSigninFailure } from '../../actions/registration'
import { userLogin } from '../../actions/user'

class Login extends Component {

     onInputChange(e) {
         this.props.updateSignupFields({
             ...this.props.signup.fields,
             [e.target.name]: e.target.value
         })
     }


     onFormSubmit(e) {
        e.preventDefault()
        const { email , password } = this.props.signup.fields
        const fields = {
            email,
            password
        }
        this.props.userLogin(fields, () => {
            this.props.updateSignupFields({fields: {}, errorMsg: ''})
            this.props.history.push('/')
        }, (error) => {
            this.props.userSigninFailure(error)
        })
     }



    render() {
        const { email, password } = this.props.signup.fields
        const { errorMsg } = this.props.signup
        return (
            <div className='Login container'>
                <h1>Log In</h1>
                {
                    errorMsg
                    ? <div className='center-align alert-danger'>{errorMsg}</div>
                    : null
                }
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>email</i>
                            <input type="email" name='email' value={email} className='validate'/>
                            <label htmlFor="icon_prefix">Email</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>lock</i>
                            <input type="password" name='password' value={password} className='validate'/>
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
            </div>
        );
    }
}

const mapStateToProps = ({ signup }) => ({ signup })

export default connect(mapStateToProps, { updateSignupFields, userLogin, userSigninFailure })(Login);