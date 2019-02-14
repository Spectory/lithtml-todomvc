import { html } from 'lit-html'
import { addTodo } from '../store/actions'
import store from '../store/store'

export function Footer (itemLeftCount) {
  return html`
    <footer class="footer">
      <span class="todo-count"><strong>${itemLeftCount}</strong> item left</span>
        <ul class="filters">
          <li>
            <a class="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
     </footer>
   `
}
