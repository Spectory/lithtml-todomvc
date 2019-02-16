# lit-html + Redux TodoMVC

## Overview

This repo contains an implementation of the TodoMVC app using
[lit-html](https://lit-html.polymer-project.org) and [Redux](https://redux.js.org).

[Demo](https://spectory.github.io/lithtml-todomvc.github.io/)

## Why?

A lightweight approach to building single-page apps that relies on
libraries rather than frameworks. This approach mitigates some of the risk
associated with breaking changes in large framework APIs (e.g. AngularJS -> Angular).

## How?

Components are a simple tree of html templates written with lit-html and
rooted by a single component called ```App```. All state changes are
handled globally with ```Redux```. Components issue actions on the
global Redux store, we subscribe to Redux state changes and re-render
the entire App using the new state. lit-html will only render changes
(without vDOM diffing!) and will handle things like removing event listeners.

Basically the entire "framework" can be summed up with one line of code:
``` javascript
store.subscribe(() => render( App(store.getState()), document.body) )
```
## Why is this different from a full Framework?

lit-html does not handle component life-cycles and does not call your
code. You call the render function and lit-html renders the
component efficiently. A very simple (although simplistic) implementation
of lit-html can be achieved in 10 lines of code.
See for instance [this blog
post](http://2ality.com/2015/01/template-strings-html.html).

Similarly Redux can be thought of as global state + PubSub +
explicit state transitions. The Redux API is just an implementation
detail and can easily be swapped out if needed. Redux is not aware of components
and does not call your code other than providing a single callback
notifying of state changes.

Director is a simple router. It does not link to UI state in any way,
it's just a library to listens to location changes, parses the path
and calls your code in response to these patterns (applying pushstate
of course).

By relying on completely decoupled libs that have small APIs, simple implementations
and hardly any runtime we mitigate risk of breaking changes. The
result is still rather feature rich and easy on the eyes.

## Features

* Client-side routing via [director](https://github.com/flatiron/director)
* Packaging, Babel, dev server and HMR via [Parcel](https://parceljs.org/)
* Components via [lit-html](https://lit-html.polymer-project.org) 
* Global state mgmt. and PubSub via [Redux](https://redux.js.org).

## Usage

``` shell
npm install
npm run dev
https://localhost:1234
```
