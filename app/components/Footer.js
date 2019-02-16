import { html } from 'lit-html'
import { clearCompleted, VisibilityFilters } from '../store/actions'
import { store } from '../store/store'
import { itemCompletedCount, itemLeftCount } from '../store/util'

function onClickClearCompleted () {
  store.dispatch(clearCompleted())
}

export function Footer (todos, visibilityFilter) {
  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>${itemLeftCount(todos)}</strong>
        item${itemLeftCount(todos) === 1 ? '' : 's'} left
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
      ${itemCompletedCount(todos) > 0 ? html`
      <button class="clear-completed"
              @click="${onClickClearCompleted}">Clear completed
      </button>
      ` : html``}
   </footer>
 `
}
