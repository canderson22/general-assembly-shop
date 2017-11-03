import React from 'react'
import { Redirect } from 'react-router-dom'
import { userLogout } from '../../actions/user'
import { connect } from 'react-redux'



class Logout extends React.Component {

    componentDidMount() {
        this.props.userLogout()
    }

    render() {
        return <Redirect to="/" />
    }
}


export default connect(null, { userLogout })(Logout);