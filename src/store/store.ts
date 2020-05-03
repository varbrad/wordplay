import create from 'zustand'
import { createInitialState, StoreState } from './state'
import { createMutators, StoreMutations } from './mutators'

type Store = StoreState & StoreMutations

export const makeStore = (initialState?: Partial<StoreState>) =>
  create<Store>(set => ({
    // Make our mutators
    ...createMutators(set),
    ...createInitialState(initialState),
  }))
