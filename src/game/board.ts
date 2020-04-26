const StandardCell = 'standard'
const StartCell = 'start'
const DoubleLetterCell = 'double-letter'
const TripleLetterCell = 'triple-letter'
const DoubleWordCell = 'double-word'
const TripleWordCell = 'triple-word'

export type CellType =
  | typeof StandardCell
  | typeof StartCell
  | typeof DoubleLetterCell
  | typeof TripleLetterCell
  | typeof DoubleWordCell
  | typeof TripleWordCell

export interface Cell {
  x: number
  y: number
  type: CellType
}

export interface GameBoard {
  cells: Cell[]
}

export const getEmptyBoard = (): GameBoard => {
  const size = 15

  const cells: GameBoard['cells'] = []

  for (let y = 0; y < size; ++y) {
    for (let x = 0; x < size; ++x) {
      cells.push({
        x,
        y,
        type: StandardCell,
      })
    }
  }

  return { cells }
}
