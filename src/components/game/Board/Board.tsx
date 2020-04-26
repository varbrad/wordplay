import React from 'react'
import { GameBoard as GameBoardType } from '../../../game/board'
import Cell from '../Cell/Cell'
import styles from './Board.module.scss'

interface Props {
  board: GameBoardType
}

const Board = ({ board }: Props): JSX.Element => {
  return (
    <div className={styles.board}>
      {board.cells.map(cell => (
        <Cell key={`${cell.x}-${cell.y}`} cell={cell} />
      ))}
    </div>
  )
}

export default Board
