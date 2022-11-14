const POSSIBLE_WINS = [
  // Accross
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Down
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //Diagonal
  [0, 4, 8],
  [6, 4, 2],
]

type Response = {
  win: boolean
  squares: number[]
} | null

export const checkForWin = (boardStatus: string[]): Response => {
  let res = null
  POSSIBLE_WINS.forEach((row, i) => {
    const [a, b, c] = POSSIBLE_WINS[i]

    if (boardStatus[a] && boardStatus[a] === boardStatus[b] && boardStatus[a] === boardStatus[c]) {
      res = { win: true, squares: [a, b, c] }
    }
  })
  return res
}
