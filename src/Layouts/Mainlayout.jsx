import {Outlet} from 'react-router-dom';
import {Nav} from '../components'


const Mainlayout = () => {
  return(
      <>
          <div style={{height:'100dvh', backgroundColor:'red'}}>

              <Nav/>

              <Outlet/>




          </div>


      </>
  )
}
export default Mainlayout;