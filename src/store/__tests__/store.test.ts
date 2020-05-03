import { makeStore } from '../store'
import { StoreState } from '../state'

describe('store', () => {
  it('should do fundamental "setState" behaviour using the generic store', () => {
    const [, store] = makeStore()

    expect(store.getState().racks).toHaveLength(0)

    const racks: StoreState['racks'] = [
      {
        id: 'a',
        tiles: [],
      },
    ]
    store.setState({ racks })

    expect(store.getState().racks).toEqual(racks)
  })

  it('should do fundamental "set" behaviour using the "set" store mutator', () => {
    const [, store] = makeStore()

    expect(store.getState().racks).toHaveLength(0)

    const racks: StoreState['racks'] = [
      {
        id: 'a',
        tiles: [],
      },
    ]
    store.getState().set({ racks })

    expect(store.getState().racks).toEqual(racks)
  })
})
