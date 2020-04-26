import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Provider } from 'mutik'
import TileBar from '../../components/game/TileBar/TileBar'
import { store } from '../../store/store'
import BoardProvider from '../../components/game/Board/BoardProvider'

const Game = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div>
        <DndProvider backend={Backend}>
          <TransformWrapper
            zoomIn={{ step: 200 }}
            zoomOut={{ step: 200 }}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent>
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BoardProvider />
              </div>
            </TransformComponent>
          </TransformWrapper>
          <TileBar />
        </DndProvider>
      </div>
    </Provider>
  )
}

export default Game
