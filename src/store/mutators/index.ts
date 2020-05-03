import { SetState } from 'zustand'
import { StoreState } from '../state'

export type StoreSetter = SetState<StoreState>

export const createMutators = (set: StoreSetter) => ({
  set: (state: Partial<StoreState>): void => set(state),
})

export type StoreMutations = ReturnType<typeof createMutators>
