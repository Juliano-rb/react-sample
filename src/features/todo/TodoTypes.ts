export interface Task {
  id: string,
  description: string,
  isComplete: boolean
}

export interface TodoState {
  tasks: Task[],
}

export interface TodoStore extends TodoState {
  addTask: (description: string) => void;
  toggleTask: (id: string) => void;
}
