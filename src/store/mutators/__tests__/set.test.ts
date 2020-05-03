import { createMutators } from '..'

describe('set', () => {
  it('should be called if the setter is triggered', () => {
    const set = jest.fn()
    const mutators = createMutators(set)

    mutators.set({})

    expect(set).toHaveBeenCalledTimes(1)
    expect(set).toHaveBeenCalledWith({})
  })

  it('should be called with any partial state if provided', () => {
    const set = jest.fn()
    const state = { racks: [] }

    const mutators = createMutators(set)
    mutators.set(state)

    expect(set).toHaveBeenCalledTimes(1)
    expect(set).toHaveBeenCalledWith(state)
  })
})
