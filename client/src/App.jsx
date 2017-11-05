import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/user'

import Nav from './views/Nav/Navbar'
import Home from './views/Home'
import Logout from './views/Registration/Logout'
import Signup from './views/Registration/Signup'
import Login from './views/Registration/Login'
import Products from './views/Products/Products'
import CartSummary from './views/Helpers/cartSummary'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <CartSummary />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />

          <Route path='/shop' component={Products} />
  
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

const mapStateToProps = ({ user }) => ({ user })

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
