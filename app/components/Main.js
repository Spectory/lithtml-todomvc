import { html } from 'lit-html'
import { Todo } from './Todo'
import { VisibilityFilters } from '../store/actions'

function todosByVisibilityFilter (todos, visibilityFilter) {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => todo.completed !== true)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed === true)
  }
}

export function Main (todos, visibilityFilter) {
  const filteredTodos = todosByVisibilityFilter(todos, visibilityFilter)

  return html`
    <section class="main">
      <input class="toggle-all" id="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${filteredTodos.map((todo, i) => html`${Todo(todo, i)}`)}
      </ul>
    </section>
  `
}
