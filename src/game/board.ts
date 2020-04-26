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

export interface LetterTile {
  type: 'standard'
  letter: string
  score: number
}

export interface WildcardTile {
  type: 'wildcard'
  letter: string
}

export type Tile = LetterTile | WildcardTile

export interface Cell {
  x: number
  y: number
  type: CellType
  tile?: Tile
}

export interface GameBoard {
  cells: Cell[]
}

const cells: Cell[] = [
  // Triple words
  { x: 0, y: 0, type: 'triple-word' },
  { x: 0, y: 7, type: 'triple-word' },
  { x: 0, y: 14, type: 'triple-word' },
  { x: 7, y: 0, type: 'triple-word' },
  { x: 7, y: 14, type: 'triple-word' },
  { x: 14, y: 0, type: 'triple-word' },
  { x: 14, y: 7, type: 'triple-word' },
  { x: 14, y: 14, type: 'triple-word' },

  // Start
  { x: 7, y: 7, type: 'start' },

  // Double words
  { x: 3, y: 0, type: 'double-word' },
  { x: 11, y: 0, type: 'double-word' },
  { x: 6, y: 2, type: 'double-word' },
  { x: 8, y: 2, type: 'double-word' },
  { x: 0, y: 3, type: 'double-word' },
  { x: 7, y: 3, type: 'double-word' },
  { x: 14, y: 3, type: 'double-word' },
  { x: 2, y: 6, type: 'double-word' },
  { x: 6, y: 6, type: 'double-word' },
  { x: 8, y: 6, type: 'double-word' },
  { x: 12, y: 6, type: 'double-word' },
  { x: 3, y: 7, type: 'double-word' },
  { x: 11, y: 7, type: 'double-word' },
  { x: 2, y: 8, type: 'double-word' },
  { x: 6, y: 8, type: 'double-word' },
  { x: 8, y: 8, type: 'double-word' },
  { x: 12, y: 8, type: 'double-word' },
  { x: 0, y: 11, type: 'double-word' },
  { x: 7, y: 11, type: 'double-word' },
  { x: 14, y: 11, type: 'double-word' },
  { x: 6, y: 12, type: 'double-word' },
  { x: 8, y: 12, type: 'double-word' },
  { x: 3, y: 14, type: 'double-word' },
  { x: 11, y: 14, type: 'double-word' },

  // Triple letters
  { x: 5, y: 1, type: 'triple-letter' },
  { x: 9, y: 1, type: 'triple-letter' },
  { x: 1, y: 5, type: 'triple-letter' },
  { x: 5, y: 5, type: 'triple-letter' },
  { x: 9, y: 5, type: 'triple-letter' },
  { x: 13, y: 5, type: 'triple-letter' },
  { x: 1, y: 9, type: 'triple-letter' },
  { x: 5, y: 9, type: 'triple-letter' },
  { x: 9, y: 9, type: 'triple-letter' },
  { x: 13, y: 9, type: 'triple-letter' },
  { x: 5, y: 13, type: 'triple-letter' },
  { x: 9, y: 13, type: 'triple-letter' },

  // Double letters
  { x: 1, y: 1, type: 'double-letter' },
  { x: 13, y: 1, type: 'double-letter' },
  { x: 2, y: 2, type: 'double-letter' },
  { x: 12, y: 2, type: 'double-letter' },
  { x: 3, y: 3, type: 'double-letter' },
  { x: 11, y: 3, type: 'double-letter' },
  { x: 4, y: 4, type: 'double-letter' },
  { x: 10, y: 4, type: 'double-letter' },
  { x: 4, y: 10, type: 'double-letter' },
  { x: 10, y: 10, type: 'double-letter' },
  { x: 3, y: 11, type: 'double-letter' },
  { x: 11, y: 11, type: 'double-letter' },
  { x: 2, y: 12, type: 'double-letter' },
  { x: 12, y: 12, type: 'double-letter' },
  { x: 1, y: 13, type: 'double-letter' },
  { x: 13, y: 13, type: 'double-letter' },
]

export const getCellType = (x: number, y: number): CellType => {
  const findCell = cells.find(cell => cell.x === x && cell.y === y)

  return findCell ? findCell.type : 'standard'
}

export const getEmptyBoard = (): GameBoard => {
  const size = 15

  const cells: GameBoard['cells'] = []

  for (let y = 0; y < size; ++y) {
    for (let x = 0; x < size; ++x) {
      cells.push({
        x,
        y,
        type: getCellType(x, y),
      })
    }
  }

  return { cells }
}
