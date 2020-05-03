import produce from 'immer'
import { StoreState } from '../state'
import { StoreSetter } from '.'

export const simpleReducer = (state: StoreState): StoreState =>
  produce(state, draft => {
    draft.racks.push({ id: 'a', tiles: [] })
  })

export default (set: StoreSetter) => (): void => set(simpleReducer)
