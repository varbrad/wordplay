import React from 'react'
import { useSelector } from 'mutik'
import { Droppable } from 'react-beautiful-dnd'
import Tile from '../Tile/Tile'
import { tilesSelector } from '../../../store/store'
import { Tile as TileType } from '../../../game/board'
import styles from './TileBar.module.scss'

const TileBar = (): JSX.Element => {
  const tiles = useSelector(tilesSelector)

  return (
    <Droppable droppableId='tile-bar' direction='horizontal'>
      {(provided): JSX.Element => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={styles.tilebar}
        >
          {tiles.map((tile: TileType, ix: number) => (
            <Tile key={tile.letter} tile={tile} index={ix} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TileBar
