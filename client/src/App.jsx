import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/user'

import Nav from './views/Nav/Navbar'
import Home from './views/Home'
import Logout from './views/Registration/Logout'
import Signup from './views/Registration/Signup'
import Products from './views/Products/Products'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Nav />
        
        <Switch>
          <Route path='/signup' render={(props) => {
            return <Signup {...props} />
          }} />
          <Route path='/shop' component={Products} />
  
          <Route path='/logout' render={(props) => {
            return <Logout {...props} />
          }} />

          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { getCurrentUser })(App);
