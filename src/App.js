// External Components
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// Internal Components
import BeLikeBill from './components/BeLikeBill'
import CatFacts from './components/CatFacts'
import ChuckNorris from './components/ChuckNorris'
import DadJokes from './components/DadJokes'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TronaldDump from './components/TronaldDump'

const App = () => {
  const [containerHeight, setContainerHeigt] = useState('10')

  // Set the min-height of the container after the component is mounted
  // This way, the container will use all the available space after the navbar
  // This is necessary because the height of the navbar is unknown
  useEffect(() => {
    const navbarHeight = document.getElementById('navbar').clientHeight
    const { outterHeight: height } = window
    setContainerHeigt(height - navbarHeight)
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Container containerHeight={containerHeight}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/be-like-bill' exact component={BeLikeBill} />
            <Route path='/cat-facts' exact component={CatFacts} />
            <Route path='/chuck-norris' exact component={ChuckNorris} />
            <Route path='/dad-jokes' exact component={DadJokes} />
            <Route path='/tronald-dump' exact component={TronaldDump} />
          </Switch>
        </Container>
      </Router>
    </>
  )
}

// Styled Components
const Container = styled.section`
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
  /* background: blue; */
  min-height: ${props => props.containerHeight}px;
`

export default App
