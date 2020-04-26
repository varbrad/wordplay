import { createStore } from 'mutik'
import { getEmptyBoard, Tile, Cell } from '../game/board'

const board = getEmptyBoard()
const tiles: Tile[] = [
  { type: 'standard', letter: 'O', score: 3 },
  { type: 'standard', letter: 'T', score: 3 },
  { type: 'standard', letter: 'I', score: 1 },
  { type: 'standard', letter: 'L', score: 2 },
  { type: 'standard', letter: 'H', score: 1 },
  { type: 'standard', letter: 'E', score: 10 },
  { type: 'standard', letter: 'P', score: 3 },
  { type: 'standard', letter: 'C', score: 1 },
]

const initialState = { board, tiles }

export const store = createStore(initialState)

export const setCellTile = (cell: Cell, tile: Tile | undefined): void =>
  store.mutate(draft => {
    const draftCell: Cell | undefined = draft.board.cells.find(
      c => c.x === cell.x && c.y === cell.y,
    )
    if (draftCell) {
      if (tile) draftCell.tile = tile
      else delete draftCell.tile
    }
  })

export type StateType = typeof initialState

export const tilesSelector = (state: StateType): StateType['tiles'] =>
  state.tiles
