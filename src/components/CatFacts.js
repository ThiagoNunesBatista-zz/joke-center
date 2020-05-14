// External Components
import React, { useState } from 'react'
import styled from 'styled-components'

const CatFacts = () => {
  const [catFact, setFact] = useState(null)

  const getFact = async () => {
    const url = 'https://catfact.ninja/fact'

    let newFact = await window.fetch(url)
    newFact = await newFact.json()
    setFact(newFact.fact)
  }

  return (
    <CatContainer>
      <h1>Cat Facts</h1>
      <section>
        <CatButton onClick={getFact}>Get a Cat Fact</CatButton>
        <p>{catFact}</p>
      </section>

      <Image src='https://source.unsplash.com/300x300/?cat' alt='Cat Image' />

    </CatContainer>
  )
}

const CatContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: justify;
    margin: 20px auto 50px;
  }
`

const CatButton = styled.button`
  display: block;
  background: #EBF4F0;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 20px 0px;
  width: 250px;
  border: 1px solid #ccc;

  &:hover {
    cursor: pointer;
    background: #72837C;
  }
`

const Image = styled.img`
  max-width: 500px;
`

export default CatFacts
