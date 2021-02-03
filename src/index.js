import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
       <App />
  </Provider>,
  document.getElementById('root')
);

