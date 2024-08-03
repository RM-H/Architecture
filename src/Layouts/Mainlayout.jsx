import {Outlet} from 'react-router-dom';
import {Nav,Footer} from '../components'


const Mainlayout = () => {
  return(
      <>
          <div className='main-layout'>

              {/*<Nav/>*/}

              <Outlet/>
              {/*<Footer/>*/}




          </div>


      </>
  )
}
export default Mainlayout;