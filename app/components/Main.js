import { html } from 'lit-html'
import { Todo } from './Todo'

export function Main (todos) {
  return html`
    <section class="main">
      <input class="toggle-all" id="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map((todo, i) => html`${Todo(todo, i)}`)}
      </ul>
    </section>
  `
}
