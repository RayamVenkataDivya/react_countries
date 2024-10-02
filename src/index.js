import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Header from './Components/Header';
/*import Home1 from './Home1';
import Courses from './Courses';*/
import Home from './Home';
import Pricing from './Pricing';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/Pricing",
            element:<Pricing></Pricing>
          },
          {
            path:"/Countries",
            element:<Countries></Countries>,
            children:[
              {
                path:"/Countries/CountryDetails/:cname",
                element:<CountryDetails></CountryDetails>
              }
            ]
          },
          
        ]
      }
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
