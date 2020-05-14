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
        <li><Link to='/cat-facts'>Cat Facts</Link></li>
        <li><Link to='/chuck-norris'>Chuck Norris</Link></li>
        <li><Link to='/dad-jokes'>Dad Jokes</Link></li>
        <li><Link to='/tronald-dump'>Tronald Dump</Link></li>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #EBF4F0;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    margin-right: 10px;
  }

  ul li a:hover, h2 a:hover {
    background: #72837C;
    color: #FFF;
  }
`

export default Navbar
