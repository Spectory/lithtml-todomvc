export function itemLeftCount (todos) {
  return todos.length
}

export function itemCompletedCount (todos) {
  return todos.filter((todo) => todo.completed === true).length
}

export function areAllItemsCompleted (todos) {
  return itemCompletedCount(todos) === itemLeftCount(todos) && itemLeftCount(todos) > 0
}
