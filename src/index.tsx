import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { OptionsContextProvider } from './hooks/OptionsContext';
import App from './App';
import './index.less';

// Mock service worker for development
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser');
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
