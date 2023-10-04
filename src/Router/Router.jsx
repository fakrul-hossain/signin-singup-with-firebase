import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import MainLayout from '../componets/MainLayout/MainLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path:'/login',
              element: <Login></Login>
               
            },
            {
                path:'/signIn',
                element: <Register></Register>
               
            },
            {
                path: '/donations/:id',
               
                
            }
        ]
    }
])

export default myCreateRoute;