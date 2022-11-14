import React from 'react'

import { Box } from '@chakra-ui/react'

import '../styles/Cell.css'

function Cell(): JSX.Element {
  return (
    <Box w="33rem" h="33rem" bg="gray.50">
      -
    </Box>
  )
}

export default Cell
