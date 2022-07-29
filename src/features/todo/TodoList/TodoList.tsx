import useTodoStore from '../useTodoStore'
import {
  Checkbox, Container, Description, ListItem,
} from './TodoList.styles'

export default function () {
  const { tasks, toggleTask: handleTaskToggle } = useTodoStore()

  const listTasks = () => tasks.map((task) => (
    <ListItem key={task.id}>
      <Checkbox
        id={task.id}
        type='checkbox'
        title={`${task.description} está completa?`}
        onChange={() => handleTaskToggle(task.id)}
        checked={task.isComplete}
      />
      <Description htmlFor={task.id}>{task.description}</Description>
    </ListItem>
  ))

  return (
    <Container id='todo-list'>
      {listTasks()}
    </Container>
  )
}
