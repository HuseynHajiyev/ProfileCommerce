import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { IsMobileProvider } from './context/IsMobileContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <IsMobileProvider>
        <App />
      </IsMobileProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
