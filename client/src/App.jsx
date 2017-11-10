import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/user'

import Nav from './views/Nav/Navbar'
import Home from './views/Home'
import Logout from './views/Registration/Logout'
import Signup from './views/Registration/Signup'
import Login from './views/Registration/Login'
import Products from './views/Products/Products'
import Checkout from './views/Checkout'
import Order from './views/Order'
import Chat from './views/Chat'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        
        <Switch>
          <Route path='/signup' render={(props) => {
            if(this.props.user) {
              return <Redirect to='/' />
            }
            return <Signup {...props} />
          }} />
          <Route path='/login' render={(props) => {
            if(this.props.user) {
              return <Redirect to='/' />
            }
            return <Login {...props} />
          }} />

          <Route path='/chat' render={(props) => {
            return <Chat {...props} />
          }} />

          <Route path='/shop' render={(props) => {
            if(!this.props.user) {
              return <Redirect to='/' />
            }
            return <Products {...props} />
          }} />
          <Route path='/checkout' render={(props) => {
            if(this.props.cart.length > 0) {
              return <Checkout {...props} />
            }
            return <Redirect to='/shop' />
          }} />

          <Route path='/completeOrder' render={(props) => {
              return <Order {...props} />
          }} />
  
          <Route path='/logout' render={(props) => {
            return <Logout {...props} />
          }} />

          <Route path='/' render={(props) => {
            return <Home {...props} />
          }} />
        </Switch>

       </div>
    );
  }
}

const mapStateToProps = ({ user, cart }) => ({ user, cart })

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
