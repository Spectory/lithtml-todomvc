import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
import { areAllItemsCompleted } from './util'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter((_, index) => index !== action.index)
    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed !== true)
    case TOGGLE_ALL:
      if (areAllItemsCompleted(state)) {
        return state.map((todo) => { return { ...todo, completed: false } })
      }
      return state.map((todo) => { return { ...todo, completed: true } })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
