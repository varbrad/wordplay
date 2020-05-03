import create from 'zustand'
import { createInitialState, StoreState } from './state'
import { createMutators, StoreMutations } from './mutators'

type Store = StoreState & StoreMutations

export const [useStore, store] = create<Store>(set => ({
  // Make our mutators
  ...createMutators(set),
  ...createInitialState(),
}))
