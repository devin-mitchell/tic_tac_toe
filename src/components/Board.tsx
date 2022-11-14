import { Box } from '@chakra-ui/react'

import Cell from './Cell'

function Board() {
  return (
    <Box w="50rem" h="50rem" display="flex" flexWrap="wrap" bg="red.100">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </Box>
  )
}

export default Board
