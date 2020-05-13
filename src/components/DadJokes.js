// External Libraries / Components
import React, { useState } from 'react'
import styled from 'styled-components'

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
    <div>
      <h1>Dad Jokes</h1>
      <DadJoke src='https://images.unsplash.com/photo-1525107989215-a4921d19cc90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='Dad Joke' />
      <JokeButton onClick={getJoke}>Get New Joke</JokeButton>
      {joke && <p>{joke}</p>}
    </div>
  )
}

const DadJoke = styled.img`
  width: 450px;
  display: block;
  margin: 10px auto 30px;
`
const JokeButton = styled.button`
  background: #000;
  padding: 10px 15px;
  color: #FFF;
  font-size: 20px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
`

export default DadJokes
