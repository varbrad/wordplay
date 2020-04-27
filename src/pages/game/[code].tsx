import React, { useEffect } from 'react'
import { Provider } from 'mutik'
import { DragDropContext, resetServerContext } from 'react-beautiful-dnd'
import { NextPageContext } from 'next'
import TileBar from '../../components/game/TileBar/TileBar'
import { store } from '../../store/store'
import BoardProvider from '../../components/game/Board/BoardProvider'

const Game = (): JSX.Element => {
  return (
    <Provider store={store}>
      <DragDropContext onDragEnd={console.log}>
        <BoardProvider />
        <TileBar />
      </DragDropContext>
    </Provider>
  )
}

export const getServerSideProps = (): any => {
  resetServerContext()
  return { props: {} }
}

export default Game
