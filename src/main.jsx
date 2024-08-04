import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Contact, Landing, Register, Masterslist, Services, Dashboard, MasterProfile} from './Pages'
import 'animate.css';
import {createTheme, ThemeProvider} from "@mui/material";

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
                element: <Register/>,

            },
            {
                path: '/contact/',
                element: <Contact/>
            },

            {
                path: '/our-services/',
                element: <Services/>
            },
            {
                path: '/dashboard/',
                element: <Dashboard/>
            },
            {
                path: '/masters-list/',
                element: <Masterslist/>
            }
            ,
            {
                path: '/masters/:ID',
                element: <MasterProfile/>
            }


        ],

    }

])


const theme = createTheme({
    palette: {
        primary: {
            main: '#00582a'
        },
        secondary: {
            main: '#b0a159'
        }
    },
    typography: {
        fontFamily: 'yekan'
    }
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}>


                <Mainlayout/>

            </RouterProvider>
        </ThemeProvider>


    </React.StrictMode>,
)
