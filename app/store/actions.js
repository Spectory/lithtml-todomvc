export const INIT = 'INIT'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo (text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo (index) {
  return { type: TOGGLE_TODO, index }
}

export function deleteTodo (index) {
  return { type: DELETE_TODO, index }
}

export function clearCompleted () {
  return { type: CLEAR_COMPLETED }
}

export function toggleAll () {
  return { type: TOGGLE_ALL }
}

export function init () {
  return { type: INIT }
}

export function setVisibilityFilter (filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
