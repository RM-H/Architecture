import {Link, useParams} from 'react-router-dom'
import {Breadcrumbs, Typography} from "@mui/material";



const MasterProfile = () => {
    const {ID} = useParams()



  return(
      <>
          <main className="dvh100 py-6">
              <div className="columns is-multiline">
                  <div className='column is-12 w100'>

                      <div className='bgclrseven py-3'>

                          <p className='has-text-white my-2'>
                              شما اینجا هستید :
                          </p>
                          <Breadcrumbs separator={<span className='textclreight'> / </span>} aria-label="breadcrumb">
                              <Link className='has-text-white' underline="hover" color="inherit" href="#">
                                  خانه
                              </Link>
                              <Link className='has-text-white' underline="hover" color="inherit" href="#">
                                  استادکاران
                              </Link>
                              <Link className='has-text-white' underline="hover" color="inherit" href="#">
                                  فلانی
                              </Link>

                          </Breadcrumbs>
                      </div>


                  </div>


              </div>


          </main>


      </>
  )
}
export default MasterProfile;