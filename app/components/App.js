import { html } from 'lit-html'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export function App (state) {
  return html`
    <section class='todoapp'>
      ${Header()}
      ${Main(state.todos, state.visibilityFilter)}
      ${Footer(state.todos, state.visibilityFilter)}
    </section>
  `
}
