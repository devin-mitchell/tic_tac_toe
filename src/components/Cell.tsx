import React from 'react'

import { Flex } from '@chakra-ui/react'

type Value = 'X' | 'O' | null

type Props = {
  value: Value
  onClick: () => void
  highlight: boolean
}

function Cell({ value, onClick, highlight }: Props): JSX.Element {
  return (
    <Flex
      onClick={onClick}
      w="100px"
      h="100px"
      justify="center"
      align="center"
      bg={highlight ? 'green.100' : 'gren.100'}>
      {value ? value : '-'}
    </Flex>
  )
}

export default Cell
