import React from 'react'
import { createBrowserRouter,BrowserRouter, RouterProvider } from "react-router";

import ParamComp from './components/ParamComp';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';


import Courses from './components/Courses';
import Reports from './components/Reports';
import MockTests from './components/MockTests';


import NotFound from './components/NotFound';

const router =createBrowserRouter(                   // this contains a list , inside which there are routes 
    [
        {
            path:"/",
            element: <Navbar/>
        },
        {
            path:"home",
            element: 
            <div>
                <Navbar/>
                <Home/>
            </div>
        },
        {
            path:"about",
            element: 
            <div>
                <Navbar/>
                <About/>
            </div>
        },

        {
            path:"dashboard",
            element: 
            <div>
                <Navbar/>
                <Dashboard/>
            </div>,
            children:[
                {
                    path:'courses',
                    element:
                    <div>
                        <Courses/>
                    </div>
    
                },
                
                {
                    path:'reports',
                    element:
                    <div>
                        <Reports/>
                    </div>
                },

                {
                    path:'mocktests',
                    element:
                    <div>
                        <MockTests/>
                    </div>
                }
            ]
    
        },
        {
            path:"/student/:id",  // here , id is the route pararameter
            element:  
            <div>
                <Navbar/>
                <ParamComp/>
            </div>
        },
        {
            path:"*",
            element:
            <div>
                <NotFound/>
            </div>
        }

]);

const App = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  
  )
}



export default App






