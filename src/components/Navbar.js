// External Libraries / Components
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <h2><Link to='/'>Joke Center</Link></h2>

      <ul>
        <li><Link to='/chuck-norris'>Chuck Norris Facts</Link></li>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
width: 100vw;
height: 7vh;
margin: 0 auto;
max-width: 1280px;
display: flex;
justify-content: space-between;
align-items: center;
`

export default Navbar
