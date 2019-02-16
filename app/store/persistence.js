import { INIT } from './actions'

function saveTodos (todos) {
  window.localStorage.setItem('lithtml-todo', JSON.stringify(todos))
}

function loadTodos () {
  let stored = window.localStorage.getItem('lithtml-todo')
  return stored ? JSON.parse(stored) : []
}

const persistence = store => next => action => {
  let result = next(action)
  if (action.type === INIT) {
    store.getState().todos = loadTodos(store)
  } else {
    saveTodos(store.getState().todos)
  }
  return result
}

export default persistence
