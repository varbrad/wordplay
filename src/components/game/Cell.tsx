import React from 'react'
import { Cell as CellType } from '../../game/board'
import styles from './Cell.module.scss'

export const CELL_SIZE = 80

export interface CellProps {
  cell: CellType
}

const renderText = (cell: CellType): string | null => {
  switch (cell.type) {
    case 'double-letter':
      return 'Double Letter Score'
    case 'double-word':
      return 'Double Word Score'
    case 'triple-letter':
      return 'Triple Letter Score'
    case 'triple-word':
      return 'Triple Word Score'
    default:
      return null
  }
}

const renderPips = (cell: CellType): JSX.Element | null => {
  switch (cell.type) {
    case 'double-letter':
    case 'double-word':
      return <div className={styles['double-cell-decoration']} />
    case 'triple-letter':
    case 'triple-word':
      return <div className={styles['triple-cell-decoration']} />
    default:
      return null
  }
}

const Cell = ({ cell }: CellProps): JSX.Element => {
  return (
    <div className={styles[cell.type]}>
      <p className={styles.text}>{renderText(cell)}</p>
      {renderPips(cell)}
    </div>
  )
}

export default Cell
