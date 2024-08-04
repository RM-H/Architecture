import {AddBox} from "@mui/icons-material";


const Certificates = () => {
  return(
      <>
          <div className='columns is-justify-content-center' style={{maxHeight: '90vh' , overflow: 'auto'}} >
              <div className='column is-10'>
                  <div className='columns is-multiline'>

                      <div className='column is-12 p-4 welcome__master has-text-left'>
                          <p className='has-text-right'>
                              مشاهده ُ ویرایش ُ حذف و اضافه کردن کنسرت ُ همایش یا تئاتر
                          </p>

                          <button className='button textclrseven borderradone p-5' onClick={() => nav('/admin/add-event')}>
                              <h2 className='pinar  has-text-weight-bold my-3 mx-3'>
                                  اضافه کردن رویداد جدید
                              </h2>
                              <AddBox/>
                          </button>



                      </div>


                  </div>


              </div>


          </div>


      </>
  )
}
export default Certificates;