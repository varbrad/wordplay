import { SetState } from 'zustand'
import { StoreState } from '../state'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createMutators = (set: SetState<StoreState>) => ({
  set: (state: StoreState): void => set(state),
})

export type StoreMutations = ReturnType<typeof createMutators>
