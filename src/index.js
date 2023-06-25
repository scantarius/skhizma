import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import News from './pages/News';
import Discography from './pages/Discography';
import Contact from './pages/Contact';

import {
  /*createBrowserRouter,*/
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

/*const router = createBrowserRouter([*/
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/discography",
    element: <Discography />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

