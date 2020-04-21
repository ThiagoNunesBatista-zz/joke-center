// External Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// Internal Components
import Home from './components/Home/Home'
import ChuckNorrisFacts from './components/ChuckNorrisFacts/ChuckNorrisFacts'
import Navbar from './components/Navbar/Navbar'

const routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          <Route path='/' exact component={Home} />
          <Route path='/chuck-norris' exact component={ChuckNorrisFacts} />
        </Container>
      </Switch>
    </Router>
  )
}

const Container = styled.div`
width: 100vw;
height: 90vh;
max-width: 1280px;
margin: 0 auto;
text-align: center;
`

export default routes
