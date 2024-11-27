import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container is missing in the HTML.");
}

const root = ReactDOM.createRoot(container); // Use createRoot for React 18+
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);