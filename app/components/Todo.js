import { html } from 'lit-html'
import { toggleTodo, deleteTodo } from '../store/actions'
import { store } from '../store/store'

function onClickTodo (e) {
  const index = Number(e.srcElement.getAttribute('data-index'))
  store.dispatch(toggleTodo(index))
}

function onClickDestroy (e) {
  const index = Number(e.srcElement.getAttribute('data-index'))
  store.dispatch(deleteTodo(index))
}

export function Todo (todo, id) {
  return html`
    <li class="${todo.completed ? 'completed' : ''}">
      <div class="view">
        <input class="toggle" 
               .checked=${todo.completed}
               type="checkbox" 
               data-index=${id}
               @click=${onClickTodo}>

        <label>${todo.text}</label>

        <button class="destroy" 
                data-index=${id} 
                @click=${onClickDestroy}>
        </button>
      </div>
      <input class="edit" 
             value="${todo.text}">
    </li>
  `
}
