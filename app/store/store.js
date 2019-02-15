import { createStore } from 'redux'
import todoApp from './reducers'

export function itemLeftCount (todos) {
  return todos.length
}

export function itemCompletedCount (todos) {
  return todos.filter((todo) => todo.completed === true).length
}

export const store =
  createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
