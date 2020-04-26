import React from 'react'
import { useDrag } from 'react-dnd'
import { Tile as TileType } from '../../../game/board'
import styles from './Tile.module.scss'

interface Props {
  tile: TileType
}

const Tile = ({ tile }: Props): JSX.Element => {
  const [{ isDragging }, drag] = useDrag({
    item: { tile, type: 'tile' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.5 : 1

  return (
    <div ref={drag} className={styles.tile} style={{ opacity }}>
      <p className={styles.letter}>{tile.letter}</p>
      {tile.type === 'standard' && <p className={styles.score}>{tile.score}</p>}
    </div>
  )
}

export default Tile
