import { html } from 'lit-html'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export function App (state) {
  return html`
    <section class='todoapp'>
      ${Header()}
      ${Main(state.todos)}
      ${Footer(state.todos.length)}
    </section>
  `
}
