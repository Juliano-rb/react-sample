import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Task, TodoStore, TodoState } from './TodoTypes'

const initialState: TodoState = {
  tasks: [
    { id: '1', description: 'Lavar louças', isComplete: true },
    { id: '2', description: 'Arrumar a sala', isComplete: false },
    { id: '3', description: 'Limpar banheiro', isComplete: false },
  ],
}

const actions = (set) => ({
  addTask: (description: string) => {
    const newTask = {
      id: new Date().getTime().toString(), // get timestamp
      description,
      isComplete: false,
    } as Task

    return set(
      (state: TodoState) => {
        const tasks = [...state.tasks, newTask]

        return { ...state, tasks }
      },
      false,
      'ADD TASK',
    )
  },

  toggleTask: (taskId: string) => set(
    (state: TodoState) => {
      const tasks = [...state.tasks]
      const task = tasks.find(({ id }) => id === taskId)
      task.isComplete = !task.isComplete

      return { ...state, tasks }
    },
    false,
    'TOGGLE TASK',
  ),
})

const useTodoStore = create<TodoStore>()(
  devtools((set) => ({
    ...initialState,
    ...actions(set),
  })),
)

export default useTodoStore
