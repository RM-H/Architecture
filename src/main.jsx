import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Landing} from './Pages'

const router = createBrowserRouter([
    {
        path: '/:lang/',
        element: <Mainlayout/>,
        // errorElement:<Errorpage/>,
        children: [
            {
                path:'/:lang/' ,
                element: <Landing/>
            }




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
