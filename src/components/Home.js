// External Libraries / Components
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Title>Welcome to Joke Center</Title>
        <Subtitle>We Use Public APIs to Get Jokes And Make Your Day Happier</Subtitle>
        <IconLink href='https:/github.com/ThiagoNunesBatista/joke-center' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon style={{ fontSize: '40px', margin: '10px' }} />
        </IconLink>
      </HomeContainer>
    </>
  )
}

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  margin: auto;
  text-align: justify;
  margin-top: 10px;
  `

const Title = styled.h1`
  font-size: 30px;
  margin: 10px;
  text-align: center;
`

const Subtitle = styled.p`
  font-size: 20px;
  margin: 10px;
`

const IconLink = styled.a`
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.5)
  }
`

export default Home
