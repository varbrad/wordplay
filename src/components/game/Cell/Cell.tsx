import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Cell as CellType, Tile as TileType } from '../../../game/board'
import Tile from '../Tile/Tile'
import styles from './Cell.module.scss'

export const CELL_SIZE = 80

export interface CellProps {
  cell: CellType
}

const renderText = (cell: CellType): string | null => {
  switch (cell.type) {
    case 'double-letter':
      return 'Double Letter'
    case 'double-word':
      return 'Double Word'
    case 'triple-letter':
      return 'Triple Letter'
    case 'triple-word':
      return 'Triple Word'
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
    case 'start':
      return <div className={styles.star} />
    default:
      return null
  }
}

const renderTile = (tile: TileType): JSX.Element => {
  return (
    <div className={styles.tile}>
      <Tile tile={tile} index={0} />
    </div>
  )
}

const Cell = ({ cell }: CellProps): JSX.Element => {
  return (
    <Droppable droppableId={`${cell.x}-${cell.y}`}>
      {(provided, snapshot): JSX.Element => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={styles[cell.type]}
          style={{
            zIndex: snapshot.isDraggingOver ? 9 : 1,
            transform: snapshot.isDraggingOver ? 'scale(1.2)' : 'scale(1)',
          }}
        >
          <p className={styles.text}>{renderText(cell)}</p>
          {renderPips(cell)}
          {cell.tile && renderTile(cell.tile)}
          <div>{provided.placeholder}</div>
        </div>
      )}
    </Droppable>
  )
}

export default Cell
