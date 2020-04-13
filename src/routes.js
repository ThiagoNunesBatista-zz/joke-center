import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home'
import ChuckNorris from './components/chuckNorris'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

const routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/chuck-norris" component={ChuckNorris} />
        </div>
      </Switch>
      <Footer />
    </Router>
  )
}

export default routes
