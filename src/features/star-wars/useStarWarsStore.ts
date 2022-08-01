import { toast } from 'react-toastify'
import create from 'zustand'
import { devtools } from 'zustand/middleware'
import StarWarsApi from './StarWarsApi'
import { StarWarsState, StarWarsStore, Planet } from './StarWarsTypes'
import { actions as appActions } from '../state'

const initialState: StarWarsState = {
  planets: [],
  errorMessage: '',
}

const actions = (set, get) => ({
  getPlanets: async () => {
    get().removeError()
    appActions.addLoadingStack()

    try {
      const planets = await StarWarsApi.getPlanets()
      get().setPlanets(planets)

      toast.success('Planetas carregados com sucesso!')
    } catch (error) {
      get().setError(error.message)
    } finally {
      appActions.removeLoadingStack()
    }
  },
  setPlanets: (planets: Planet[]) => set(
    (state: StarWarsState) => ({ ...state, planets }),
    false,
    'SET PLANETS',
  ),
  setError: (message: string) => set(
    (state: StarWarsState) => ({ ...state, errorMessage: message }),
    false,
    'SET ERROR',
  ),
  removeError: () => set(
    (state: StarWarsState) => ({ ...state, errorMessage: '' }),
    false,
    'REMOVE ERROR',
  ),
})

const useTodoStore = create<StarWarsStore>()(
  devtools((set, get) => ({
    ...initialState,
    ...actions(set, get),
  })),
)

export default useTodoStore
