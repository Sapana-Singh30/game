import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

const rout = createBrowserRouter[(
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
)]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter route={rout}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

