import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFields } from '../../actions/settings'
import { updateUser, deleteUser } from '../../actions/user'

class Settings extends Component {


    onInputChange(e) {
        const fields = {
            ...this.props.settings,
            [e.target.name]: e.target.value
        }
        this.props.updateFields(fields)
    }

    onFormSubmit(e) {
        e.preventDefault()
        const fields = {
            ...this.props.settings,
            _id: this.props.user._id
        }
        this.props.updateUser(fields)
        this.props.history.push('/settings')
    }

    onDelete() {
        this.props.deleteUser(this.props.user._id)
        this.props.history.push('/')
    }
    

    render() {
        // console.log(this.props.user)
        return (
            <div className='Settings container'>
                <h2>User Settings</h2>
                {
                    this.props.user
                ? (<h4>{this.props.user.f_name}  {this.props.user.l_name}</h4>)
                : null
                }
                <div className='row'>
                <form className='col s12' onSubmit={this.onFormSubmit.bind(this)} onChange={this.onInputChange.bind(this)}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>account_circle</i>
                            <input type="text" name='f_name' value={this.props.settings.f_name} className='validate'/>
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>person_pin</i>
                            <input type="text" name='l_name' value={this.props.settings.l_name} className='validate'/>
                            <label htmlFor="icon_prefix">Last Name</label>
                        </div>
                    </div>
                    <div className='input-field col s4'>
                        <button className='btn green lighten-1'>Update Profile</button>
                    </div>
                </form>
                </div>
                <div>
                    <p className='flow-text'>
                        If you have been kicked out of GA and need to delete your account.
                        Please just know you get no refunds!
                        <button onClick={this.onDelete.bind(this)} className='btn red darken-2'>Delete Profile</button>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user, settings }) => ({ user, settings })

export default connect(mapStateToProps, { updateFields, updateUser, deleteUser })(Settings)