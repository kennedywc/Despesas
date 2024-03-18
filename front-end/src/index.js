import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './routes/Main';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home';
import Create from './routes/create';
import Edit from './routes/edit'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "edit/:id",
          element: <Edit />,
        },
      ]
    },
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);