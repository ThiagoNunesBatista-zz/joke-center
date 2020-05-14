// External Libraries / Components
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <h2><Link to='/'>Joke Center</Link></h2>

      <ul>
        <li><Link to='/be-like-bill'>Be Like Bill</Link></li>
        <li><Link to='/chuck-norris'>Chuck Norris Facts</Link></li>
        <li><Link to='/dad-jokes'>Dad Jokes</Link></li>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 7vh;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  ul {
    display: flex;
  }

  ul li {
    margin-right: 10px;
  }
`

export default Navbar
