import {Outlet} from 'react-router-dom';
import {Nav, Footer} from '../components'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Mainlayout = () => {
    return (
        <>
            <div className='main-layout'>

                <Nav/>

                <Outlet/>
                <Footer/>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    bodyClassName='yekan'

                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition: Bounce
                />


            </div>


        </>
    )
}
export default Mainlayout;