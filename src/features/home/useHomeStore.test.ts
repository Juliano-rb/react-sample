import { act, renderHook } from '@testing-library/react'
import useHomeStore from './useHomeStore'

describe('Counter Store', () => {
  const initialState = useHomeStore.getState()

  afterEach(() => {
    act(() => {
      useHomeStore.setState(initialState, true)
    })
  })

  // pretty self explanatory
  it('should have an initial value of 0', () => {
    const { result } = renderHook(() => useHomeStore())
    expect(result.current.number).toBe(0)
  })

  // for x incrementations, it should be x
  it('should increment the value', () => {
    const { result } = renderHook(() => useHomeStore())
    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.increment()
      result.current.increment()
    })
    expect(result.current.number).toBe(4)
  })

  // for x decrementations, it should be -x
  it('should decrement the value', () => {
    // because we mocked our store in the pre-requisites
    // we can safely assume that it's been reinitialized
    // back to it's initial state after each test
    const { result } = renderHook(() => useHomeStore())
    act(() => {
      result.current.decrement()
      result.current.decrement()
      result.current.decrement()
      result.current.decrement()
    })
    expect(result.current.number).toBe(-4)
  })

  // for x decrementations, it should be -x
  it('should increment the value by especific value', () => {
    // because we mocked our store in the pre-requisites
    // we can safely assume that it's been reinitialized
    // back to it's initial state after each test
    const { result } = renderHook(() => useHomeStore())
    act(() => {
      result.current.incrementBy(5)
    })
    expect(result.current.number).toBe(5)
  })

  // no matter how much we increment or decrement,
  // it should reset to 0
  it('should reset the value', () => {
    const { result } = renderHook(() => useHomeStore())
    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.increment()
    })
    expect(result.current.number).toBe(3)
    act(() => {
      result.current.reset()
    })
    expect(result.current.number).toBe(0)
  })
})
