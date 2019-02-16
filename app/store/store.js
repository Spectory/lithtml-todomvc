import { createStore, applyMiddleware } from 'redux'
import persistence from './persistence'
import todoApp from './reducers'

export const store =
  createStore(todoApp, applyMiddleware(persistence))
