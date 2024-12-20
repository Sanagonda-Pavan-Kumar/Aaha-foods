import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AppRoute from './AppRoute';

const mountNode = document.getElementById('root');

const root = ReactDOM.createRoot(mountNode);
root.render(
  <React.StrictMode>
     <AppRoute />
     
  </React.StrictMode>
);
