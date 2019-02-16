import { VisibilityFilters } from './actions'

export function itemLeftCount (todos) {
  return todos.length
}

export function itemCompletedCount (todos) {
  return todos.filter((todo) => todo.completed === true).length
}

export function areAllItemsCompleted (todos) {
  return itemCompletedCount(todos) === itemLeftCount(todos) && itemLeftCount(todos) > 0
}

export function todosByVisibilityFilter (todos, visibilityFilter) {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => todo.completed !== true)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed === true)
  }
}
