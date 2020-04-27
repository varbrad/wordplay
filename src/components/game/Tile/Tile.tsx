import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Tile as TileType } from '../../../game/board'
import styles from './Tile.module.scss'

interface Props {
  index: number
  tile: TileType
}

const Tile = ({ index, tile }: Props): JSX.Element => {
  return (
    <Draggable draggableId={tile.letter} index={index}>
      {(provided): JSX.Element => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.tile}
          style={provided.draggableProps.style}
        >
          <p className={styles.letter}>{tile.letter}</p>
          {tile.type === 'standard' && (
            <p className={styles.score}>{tile.score}</p>
          )}
        </div>
      )}
    </Draggable>
  )
}

export default Tile
