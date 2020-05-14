// External Libraries / Components
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Title>Welcome to Joke Center</Title>
        <Subtitle>We Use Public APIs to Get Jokes And Make Your Day Happier</Subtitle>
        <a href='https:/github.com/ThiagoNunesBatista/joke-center' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon style={{ fontSize: '40px' }} />
        </a>
      </HomeWrapper>
    </>
  )
}

// Styled Components

const HomeWrapper = styled.div`
  top: 40%;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  `

const Title = styled.h1`
  font-size: 30px;
  text-align: center;

  font-weight: bold;
  margin-bottom: 10px;
`

const Subtitle = styled.p`
  font-size: 20px;
  text-align: justify;

  font-weight: bold;
  margin-bottom: 10px;
`

export default Home
