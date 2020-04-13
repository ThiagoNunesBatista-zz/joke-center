import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const index = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/">Joke Center</Link>
        <ul>
          <li><Link to="/chuck-norris">Chuck Norris</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default index
