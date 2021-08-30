import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestPokemon } from './actions/pokemon_actions'

// let requestPokemon = requestPokemon 
window.requestPokemon = requestPokemon


document.addEventListener("DOMContentLoaded", () => {



  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store 
  ReactDOM.render(<Root store={store} />, rootEl)
})