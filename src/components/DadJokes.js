// External Components
import React, { useState } from 'react'
import styled from 'styled-components'
import DadJokeImage from '../assets/images/dad-joke.jpeg'

const DadJokes = () => {
  const [joke, setJoke] = useState(null)

  const getJoke = async () => {
    let newJoke = await window.fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Joke Center, An Open Source Project, https://github.com/ThiagoNunesBatista/joke-center'
      }
    })
    newJoke = await newJoke.json()
    setJoke(newJoke.joke)
  }

  return (
    <DadContainer>
      <h1>Dad Jokes</h1>
      <DadJoke src={DadJokeImage} alt='Dad Joke' />
      <Button onClick={getJoke}>Get New Joke</Button>
      {joke && <p>{joke}</p>}
    </DadContainer>
  )
}

// Styled Components
const DadContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const DadJoke = styled.img`
  width: 450px;
  max-width: 100%;
  display: block;
  margin: 10px auto 30px;
`

const Button = styled.button`
  background: #72837C;
  padding: 10px 15px;
  color: #FFF;
  font-size: 20px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
`

export default DadJokes
