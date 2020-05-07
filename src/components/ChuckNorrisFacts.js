// External Libraries / Components
import React, { useState } from 'react'
import styled from 'styled-components'

// Internal Components
import ChuckNorrisImg from '../assets/images/chuck-norris-icon.jpg'

const ChuckNorrisFacts = () => {
  const [joke, setJoke] = useState(null)

  const getNewJoke = async () => {
    let newJoke = await window.fetch('https://api.chucknorris.io/jokes/random')
    newJoke = await newJoke.json()
    setJoke(newJoke.value)
  }

  return (
    <>
      <ChuckImg src={ChuckNorrisImg} alt='Chuck Norris' />
      <Button onClick={getNewJoke}>Get a Joke</Button>
      {joke && <JokeText>&quot;{joke}&quot;</JokeText>}
    </>
  )
}

// Styled Components

const ChuckImg = styled.img`
  width: 300px;
  display: block;
  margin: 10px auto 30px;
`

const JokeText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
`

const Button = styled.button`
  background: #000;
  padding: 10px 15px;
  color: #FFF;
  font-size: 20px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
`

export default ChuckNorrisFacts
