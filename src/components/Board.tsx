import React, { useState } from 'react'

import { Box, Button, Text, VStack } from '@chakra-ui/react'

import { checkForWin } from '../utils/helperFunctions'
import Cell from './Cell'

const INIT_BOARD = Array(9).fill(null)

function Board() {
  const [board, setBoard] = useState(INIT_BOARD)
  const [isXTurn, setIsXTurn] = useState(true)
  const [winner, setWinner] = useState<boolean>(false)
  const [winningCells, setWinningCells] = useState<number[]>()

  return (
    <VStack justify="center" spacing={4}>
      <Box mt="100px" w="300px" h="full" display="flex" flexWrap="wrap">
        {board.map((cell, index) => {
          const handleClick = () => {
            if (board[index] == null) {
              const newBoard = [...board]
              newBoard[index] = isXTurn ? 'X' : 'O'

              setBoard(newBoard)
              setIsXTurn(!isXTurn)

              const res = checkForWin(newBoard)
              res?.squares && setWinningCells(res.squares)
              setWinner(!!res?.win)
            }
          }

          return (
            <Cell
              highlight={winningCells ? winningCells?.includes(index) : false}
              key={`${index}: ${cell}`}
              value={cell}
              onClick={handleClick}
            />
          )
        })}
      </Box>
      <Button
        onClick={() => {
          setBoard(INIT_BOARD)
          setIsXTurn(true)
          setWinningCells([])
          setWinner(false)
        }}>
        Reset Game
      </Button>
      {winner && <Text>{`${isXTurn ? 'O' : 'X'} is the winner!`}</Text>}
    </VStack>
  )
}

export default Board
