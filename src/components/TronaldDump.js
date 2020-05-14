// External Components
import React from 'react'
import styled from 'styled-components'

const TronaldDump = () => {
  return (
    <div>
      <Image src='https://www.tronalddump.io/random/meme' alt='Tronald Dump Meme' />
    </div>
  )
}

// Styled Components
const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`

export default TronaldDump
