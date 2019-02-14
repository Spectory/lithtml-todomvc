import { html } from 'lit-html'
import { addTodo } from '../store/actions'
import store from '../store/store'

function onKeyUp (e) {
  if (e.keyCode === 13) {
    const text = e.srcElement.value.trim()
    if (text.length > 0) {
      store.dispatch(addTodo(e.srcElement.value))
    }
    e.srcElement.value = ''
  }
}

export function Header () {
  return html`
    <header class='header'>
      <h1>todos</h1>
      <input class="new-todo" 
             placeholder="What needs to be done?"
             autofocus=""
             @keyup="${onKeyUp}">
    </header>
  `
}
