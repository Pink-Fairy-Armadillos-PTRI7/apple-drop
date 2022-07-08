import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'easy-peasy';
import store from './lib/store.js';
import App from './components/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
