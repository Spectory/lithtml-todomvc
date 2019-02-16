import { App } from './components/App'
import { render } from 'lit-html'
import { Router } from 'director/build/director'
import { store } from './store/store'
import { setVisibilityFilter, VisibilityFilters, init } from './store/actions'

store.dispatch(init())

const router = new Router()

router.on('all', () => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)))
router.on('active', () => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)))
router.on('completed', () => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)))

router.configure({
  notfound: () => {
    window.location.hash = ''
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
  }
})

function renderApp () {
  render(App(store.getState()), document.body)
}
store.subscribe(renderApp)

router.init()
renderApp()
