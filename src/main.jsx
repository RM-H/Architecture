import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Landing, Register} from './Pages'
import 'animate.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        // errorElement:<Errorpage/>,
        children: [
            {
                path: '/',
                element: <Landing/>
            },
            {
                path: '/register/',
                element: <Register/>
            }


        ],

    }

])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Mainlayout/>
        </RouterProvider>


    </React.StrictMode>,
)
