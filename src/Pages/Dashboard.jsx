import {useState} from "react";
import {Button} from "@mui/material";
import {ConfirmationNumber, ExitToApp, PersonPin} from "@mui/icons-material";
import {Registerform} from "./index.jsx";
import{Certificate} from '../components'


const Dashboard = () => {




    // dynamic button and h2 to show where user is
    const [Active , setActive] = useState(1)





    const handleExit = () => {

    }


    let content

    if (Active == 2) {
        content = <Registerform/>
    } else if (Active == 1) {
        content= <Certificate/>
    }



  return(
      <>
          <main className='dvh100 pt-6'>


                  <div className='columns mx-0 pt-6  is-multiline   '>

                      <div
                          className='column is-3 bgclrseven has-text-white is-flex is-flex-direction-column is-align-items-center  ' style={{flexGrow:1}}>

                          <h2 className=' is-size-3-desktop'>
                              ایشیم
                          </h2>

                          <ul className='w100' style={{position: 'sticky' , top:'10%'}}>
                              <li>
                                  <Button onClick={() => setActive(1)}
                                          className={`button yekan has-text-white is-size-6-desktop dashboardhover w100 is-justify-content-flex-start ${Active === 1 && 'bgclreight'} `}
                                          style={{height: '4rem'}}>
                                      <ConfirmationNumber className='ml-1'/>
                                      گواهینامه های من

                                  </Button>
                              </li>

                              <li>
                                  <Button onClick={() => setActive(2)}
                                          className={`button yekan has-text-white is-size-6-desktop dashboardhover w100 is-justify-content-flex-start ${Active === 2 && 'bgclreight'} `}
                                          style={{height: '4rem'}}>
                                      <PersonPin className='ml-1'/>
                                      مشخصات کاربری

                                  </Button>
                              </li>





                              <li>
                                  <Button
                                      className='button yekan has-text-white is-size-6-desktop  dashboardhover w100 is-justify-content-flex-start '
                                      onClick={handleExit} style={{height: '4rem'}}>
                                      <ExitToApp className='ml-1'/>
                                      خروج از حساب

                                  </Button>
                              </li>


                          </ul>


                      </div>



                      <>
                          <div className='column ps-6 is-9 '>


                              {content}


                          </div>


                      </>


                  </div>





          </main>


      </>
  )
}
export default Dashboard;