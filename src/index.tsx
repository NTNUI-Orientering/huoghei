import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { OptionsContextProvider } from './hooks/OptionsContext';
import App from './App';
import './index.less';
import { worker } from './mocks/browser';

// Mock service worker for development
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const container = document.getElementById('app-root') as Element;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OptionsContextProvider>
        <App />
      </OptionsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
