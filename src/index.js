import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App state={store.getState()} /* dispatch={store.dispatch.bind(store)} store={store} */ />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>, document.getElementById('root')
);

window.store = store;