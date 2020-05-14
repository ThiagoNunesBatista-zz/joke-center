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
    <>
      <h1>Cat Facts</h1>
      <CatContainer>
        <Image src='https://source.unsplash.com/500x500/?cat' alt='Cat Image' />

        <section>
          <CatButton onClick={getFact}>Get a Cat Fact</CatButton>
          <p>{catFact}</p>
        </section>

      </CatContainer>
    </>
  )
}

const CatContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const CatButton = styled.button`
  background: #EBF4F0;
  border: none;
  display: block;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 20px 0px;
  width: 100%;
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
