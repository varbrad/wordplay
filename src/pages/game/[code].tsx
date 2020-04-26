import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Cell from '../../components/game/Cell'

const Game = (): JSX.Element => {
  return (
    <TransformWrapper zoomIn={{ step: 200 }} zoomOut={{ step: 200 }}>
      <TransformComponent>
        <Cell cell={{ x: 0, y: 0, type: 'standard' }} />
        <Cell cell={{ x: 1, y: 0, type: 'start' }} />
        <Cell cell={{ x: 2, y: 0, type: 'double-letter' }} />
        <Cell cell={{ x: 3, y: 0, type: 'triple-letter' }} />
        <Cell cell={{ x: 3, y: 0, type: 'double-word' }} />
        <Cell cell={{ x: 3, y: 0, type: 'triple-word' }} />
      </TransformComponent>
    </TransformWrapper>
  )
}

export default Game
