import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { OptionsContextProvider } from './hooks/OptionsContext';
import App from './App';
import './index.less';

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
