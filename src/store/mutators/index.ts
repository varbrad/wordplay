import { SetState } from 'zustand'
import { StoreState } from '../state'

import simple from './simple'

export type StoreSetter = SetState<StoreState>

type RetT = <T extends FunctionConstructor>(a: T) => ReturnType<T>

export const createMutators = (set: StoreSetter) => ({
  set: (state: Partial<StoreState>, preserve = true): void =>
    set(preserve ? state : () => state),

  // Mutations
  simple: simple(set),
})

export type StoreMutations = ReturnType<typeof createMutators>
