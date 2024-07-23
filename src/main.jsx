import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        // errorElement:<Errorpage/>,
        children: [




        ] ,

    }

])



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Mainlayout/>
        </RouterProvider>


    </React.StrictMode>,
)
