// External Components
import React, { useState } from 'react'
import styled from 'styled-components'

// Internal Components
import ChuckNorrisImg from '../assets/images/chuck-norris-icon.jpg'

const ChuckNorris = () => {
  const [joke, setJoke] = useState(null)

  const getNewJoke = async () => {
    let newJoke = await window.fetch('https://api.chucknorris.io/jokes/random')
    newJoke = await newJoke.json()
    setJoke(newJoke.value)
  }

  return (
    <ChuckContainer>
      <Image src={ChuckNorrisImg} alt='Chuck Norris' />
      <Button onClick={getNewJoke}>Get a Joke</Button>
      {joke && <JokeText>&quot;{joke}&quot;</JokeText>}
    </ChuckContainer>
  )
}

// Styled Components
const ChuckContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
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
  background: #72837C;
  padding: 10px 15px;
  color: #FFF;
  font-size: 20px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
`

export default ChuckNorris
