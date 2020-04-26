import React, { useCallback } from 'react'
import { useDrop } from 'react-dnd'
import { Cell as CellType, Tile as TileType } from '../../../game/board'
import { setCellTile } from '../../../store/store'
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
      <Tile tile={tile} />
    </div>
  )
}

const Cell = ({ cell }: CellProps): JSX.Element => {
  const [, drop] = useDrop({
    accept: 'tile',
    canDrop: () => cell.tile === undefined,
    drop: dragObject => {
      const tile = (dragObject as any).tile as TileType
      setCellTile(cell, tile)
    },
  })

  const handleCellClick = useCallback(() => {
    if (!cell.tile) return
    setCellTile(cell, undefined)
  }, [cell])

  return (
    <div
      ref={drop}
      className={styles[cell.type]}
      onDoubleClick={handleCellClick}
    >
      <p className={styles.text}>{renderText(cell)}</p>
      {renderPips(cell)}
      {cell.tile && renderTile(cell.tile)}
    </div>
  )
}

export default Cell
