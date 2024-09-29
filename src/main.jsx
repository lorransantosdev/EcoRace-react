import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import Cadastro from './pages/Cadastro.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Login from './pages/Login.jsx';
import Logado from './pages/Logado.jsx';
import ConteudoPrincipal from './components/ConteudoPrincipal.jsx';
import Manual from './pages/Manual.jsx';
import Sustainability from './pages/Sustainability.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ConteudoPrincipal /> },
      { path: '/manual', element: <Manual /> },
      { path: '/cadastro', element: <Cadastro /> },
      { path: '/sustainability', element: <Sustainability /> },
      { path: '/login', element: <Login /> },
      { path: '/login/:id', element: <Logado /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);