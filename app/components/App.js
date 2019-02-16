import { html } from 'lit-html'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { itemLeftCount } from '../store/util'

export function App (state) {
  return html`
    <section class='todoapp'>
      ${Header()}
      ${Main(state.todos, state.visibilityFilter)}
      ${itemLeftCount(state.todos) > 0 ? html`
      ${Footer(state.todos, state.visibilityFilter)}
      ` : html``}
    </section>
  `
}
