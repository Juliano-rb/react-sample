import { act, renderHook } from '@testing-library/react'
import useStarWarsStore from './useStarWarsStore'
import mockApi from '../../infrastructure/test-helpers/test-mock-api'
import StarWarsApi from './StarWarsApi'

jest.mock('./StarWarsApi')

const getPlanetsReturn = [
  {
    name: 'Test1',
    diameter: '12345',
    rotationPeriod: '24',
    population: '1000',
    climate: 'arid',
    terrain: 'desert',
  },
]

describe('useStarWarsStore', () => {
  const initialState = useStarWarsStore.getState()

  afterEach(() => {
    act(() => {
      useStarWarsStore.setState(initialState, true)
    })
  })

  it('should have an empty error message', () => {
    const { result } = renderHook(() => useStarWarsStore())
    expect(result.current.errorMessage).toBe('')
  })

  it('should set error message', () => {
    const { result } = renderHook(() => useStarWarsStore())
    const error = 'Error'
    act(() => {
      result.current.setError(error)
    })
    expect(result.current.errorMessage).toBe(error)
  })

  it('should remove error message', () => {
    const { result } = renderHook(() => useStarWarsStore())
    const error = 'Error'
    act(() => {
      result.current.setError(error)
      result.current.removeError()
    })
    expect(result.current.errorMessage).toBe('')
  })

  it('should have an empty array in planets', () => {
    const { result } = renderHook(() => useStarWarsStore())
    expect(result.current.planets).toStrictEqual([])
  })

  // for x incrementations, it should be x
  it('should store planets in planets array when get planets is called', async () => {
    mockApi(StarWarsApi.getPlanets).mockResolvedValue(getPlanetsReturn)

    const { result } = renderHook(() => useStarWarsStore())
    await act(async () => {
      await result.current.getPlanets()
    })
    expect(result.current.planets).toBe(getPlanetsReturn)
  })
})
