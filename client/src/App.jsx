import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './views/Nav/Navbar'
import Home from './views/Home'
import Signup from './views/Registration/Signup'
import Products from './views/Products/Products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/signup' render={(props) => {
            return <Signup {...props} />
          }} />
          <Route path='/shop' component={Products} />


          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
