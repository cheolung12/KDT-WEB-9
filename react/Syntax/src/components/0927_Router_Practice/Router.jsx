import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Student from './Student';
import App from '../../App';
import Home from './Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'student/:param',
        element: <Student />,
      },
    ],
  },
]);

export default Router;
