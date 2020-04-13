import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home'

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default routes
