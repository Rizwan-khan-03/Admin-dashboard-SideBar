import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store} >
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // </Provider>
);




