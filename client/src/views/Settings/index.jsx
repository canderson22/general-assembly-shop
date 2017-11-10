import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../../actions/user'

class Settings extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        console.log(this.props.user)
        return (
            <div className='Settings container'>
                <h1>User Information</h1>
                <h2>User Orders</h2>

                <h2>User Settings</h2>
                <div className='row'>
                <form className='col s12' >
                    <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>account_circle</i>
                            <input type="text" name='f_name' defaultValue='f' className='validate'/>
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>person_pin</i>
                            <input type="text" name='l_name' defaultValue='l' className='validate'/>
                            <label htmlFor="icon_prefix">Last Name</label>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { getCurrentUser })(Settings)