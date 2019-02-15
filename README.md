# lit-html + Redux TodoMVC

## Overview

This repo contains an implementation of the TodoMVC app using ES2018,
[lit-html](https://lit-html.polymer-project.org) and [Redux](https://redux.js.org) and functional HTML. 

[Demo](https://spectory.github.io/lithtml-todomvc.github.io/)

## Why?

A light-weight approach to building single-page apps that relies on
libraries rather than frameworks to avoid the risk of breaking changes
in large framework APIs and to facilitate code sharing between teams
working with different tools.

## How?

Components are a simple tree of html templates written in lit-html and
rooted by a single component called ```App```. All state changes are
handled globally with ```Redux```. We subscribe to Redux state
changes and rerender the entire App using the current state. lit-html
will in turn only render changes (without vDOM diffing) and take care
of things like removing event listeners.

Basically the entire "framework" can be summed up with one line of code:
``` javascript
store.subscribe(() => render( App(store.getState()), document.body) )
```

*This is still WIP*

## Features

* Client-side routing via director
* Packaging, Babel, dev server and HMR via parcel
* Components via lit-html
* Global state mgmt. and PubSub via Redux

## Usage

``` shell
npm install
npm run dev
```
