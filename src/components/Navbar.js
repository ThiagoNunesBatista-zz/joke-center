// External Components
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav id='navbar'>
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
    margin: 10px;
    border-right: 2px solid #72837C;
    border-left: 2px solid #72837C;
    padding: 2px;
  }

  ul li a:hover, h2 a:hover {
    background: #72837C;
    color: #FFF;
  }

  a {
    color: #72837C;
  }
`

export default Navbar
