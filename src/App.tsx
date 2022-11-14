import React from 'react'

import './styles/App.css'

import { Container } from '@chakra-ui/react'

import Board from './components/Board'

function App(): JSX.Element {
  return (
    <Container centerContent>
      <Board />
    </Container>
  )
}

export default App
