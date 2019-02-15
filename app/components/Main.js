import { html } from 'lit-html'
import { Todo } from './Todo'
import { VisibilityFilters, toggleAll } from '../store/actions'
import { store, itemCompletedCount, itemLeftCount } from '../store/store'

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

function allItemsChecked(todos) {
  return itemCompletedCount(todos) === itemLeftCount(todos) && todos.length > 0 
}

function onClickToggleAll () {
  store.dispatch(toggleAll())
}

export function Main (todos, visibilityFilter) {
  const filteredTodos = todosByVisibilityFilter(todos, visibilityFilter)

  return html`
    <section class="main">
      <input class="toggle-all"
             id="toggle-all"
             .checked=${allItemsChecked(todos)}
             @click=${onClickToggleAll}
             type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${filteredTodos.map((todo, i) => html`${Todo(todo, i)}`)}
      </ul>
    </section>
  `
}
