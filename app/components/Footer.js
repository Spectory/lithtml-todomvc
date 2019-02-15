import { html } from 'lit-html'
import { VisibilityFilters } from '../store/actions'

export function Footer (itemLeftCount, visibilityFilter) {
  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>${itemLeftCount}</strong>
        item${itemLeftCount === 1 ? '' : 's'} left
      </span>
      <ul class="filters">
        <li>
          <a class=${visibilityFilter === VisibilityFilters.SHOW_ALL ? 'selected' : ''}
             href="#/">All
          </a>
        </li>
        <li>
          <a class=${visibilityFilter === VisibilityFilters.SHOW_ACTIVE ? 'selected' : ''} 
             href="#/active">Active
          </a>
        </li>
        <li>
          <a class=${visibilityFilter === VisibilityFilters.SHOW_COMPLETED ? 'selected' : ''}
             href="#/completed">Completed
          </a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
   </footer>
 `
}
