import React from 'react';
import ReactDOM from 'react-dom/client';
// import './style/style.scss';
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import Home from './home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
