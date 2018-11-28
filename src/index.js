import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import gameReducer from './reducers/game-reducer';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(gameReducer);

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
)

const render = (Component) => {
  ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));
}
render(App);
