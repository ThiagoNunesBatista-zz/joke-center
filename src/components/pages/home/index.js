import React from 'react'
import './styles.css'
import ImageBackground from '../../layout/imageBackground'
import GitHubIcon from '@material-ui/icons/GitHub'

const Home = () => {
  return (
    <div>
      <ImageBackground />
      <div className="homeWrapper">
        <h1 className="title">Welcome to Joke Center</h1>
        <p className="subtitle">An Open Source Project That Uses Public APIs to Give You Some Funny.</p>
        <a href="https://github.com/ThiagoNunesBatista/joke-center">
          <GitHubIcon style = {{ fontSize: '40px' }}/>
        </a>
      </div>

    </div>
  )
}

export default Home
