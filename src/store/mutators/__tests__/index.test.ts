import { createMutators } from '..'

describe('createMutators', () => {
  it('should return an object of functions', () => {
    const set = jest.fn()
    const mutators = createMutators(set)

    // Expect the mutators to be an object
    expect(mutators).toEqual(expect.any(Object))

    // And all the mutator values to be functions
    Object.values(mutators).forEach(value => {
      expect(value).toEqual(expect.any(Function))
    })
  })
})
