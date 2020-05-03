import { createInitialState, StoreState } from '..'

describe('createInitialState', () => {
  it('should match a snapshot if no arguments provided', () => {
    expect(createInitialState()).toMatchSnapshot()
  })

  it('should allow for custom properties if provided', () => {
    const racks: StoreState['racks'] = []
    const state = createInitialState({ racks })
    expect(state.racks).toEqual(racks)
  })
})
