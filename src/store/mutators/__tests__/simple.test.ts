import { makeStore } from '../../store'

describe('simple mutator', () => {
  it('should add a new tile to the rack', () => {
    const [, store] = makeStore()

    expect(store.getState().racks).toHaveLength(0)

    store.getState().simple()

    expect(store.getState().racks).toMatchSnapshot()
  })
})
