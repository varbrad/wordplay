import React from 'react'
import { useSelector } from 'mutik'
import { StateType } from '../../../store/store'
import Board from './Board'

const selector = (state: StateType): StateType['board'] => state.board

const BoardProvider = (): JSX.Element => {
  const board = useSelector(selector)

  return <Board board={board} />
}

export default BoardProvider
