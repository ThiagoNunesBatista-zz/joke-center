// External Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// Internal Components
import Home from './components/Home'
import Navbar from './components/Navbar'
import BeLikeBill from './components/BeLikeBill'
import CatFacts from './components/CatFacts'
import ChuckNorrisFacts from './components/ChuckNorrisFacts'
import DadJokes from './components/DadJokes'
import TronaldDump from './components/TronaldDump'

const routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          <Route path='/' exact component={Home} />
          <Route path='/be-like-bill' exact component={BeLikeBill} />
          <Route path='/cat-facts' exact component={CatFacts} />
          <Route path='/chuck-norris' exact component={ChuckNorrisFacts} />
          <Route path='/dad-jokes' exact component={DadJokes} />
          <Route path='/tronald-dump' exact component={TronaldDump} />
        </Container>
      </Switch>
    </Router>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`

export default routes
