import store from './store/store'
import { App } from './components/App'
import { render } from 'lit-html'

function loop () {
  render(App(store.getState()), document.body)
}
store.subscribe(loop)
loop()
