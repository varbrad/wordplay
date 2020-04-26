import React from 'react'
import { useSelector } from 'mutik'
import Tile from '../Tile/Tile'
import { tilesSelector } from '../../../store/store'
import { Tile as TileType } from '../../../game/board'
import styles from './TileBar.module.scss'

const TileBar = (): JSX.Element => {
  const tiles = useSelector(tilesSelector)

  return (
    <div className={styles.tilebar}>
      {tiles.map((letter: TileType, ix: number) => (
        <div key={ix} style={{ marginRight: 10 }}>
          <Tile tile={letter} />
        </div>
      ))}
    </div>
  )
}

export default TileBar
