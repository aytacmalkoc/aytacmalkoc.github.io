import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import { Layout } from './components';

ReactGA.initialize(import.meta.env.VITE_APP_GA_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
