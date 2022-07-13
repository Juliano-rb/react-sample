import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { HomeStore } from './HomeTypes'

const useHomeStore = create<HomeStore>()(
  devtools((set) => ({
    number: 0,
    increment: () => {
      set((state) => ({ number: state.number + 1 }), false, 'INCREMENT')
    },
    decrement: () => {
      set((state) => ({ number: state.number - 1 }), false, 'DECREMENT')
    },
    incrementBy: (quantity: number) => {
      set((state) => ({ number: state.number + quantity }), false, 'INCREMENT BY')
    },
    reset: () => set({ number: 0 }, false, 'RESET'),
  })),
)

export default useHomeStore
