import {AddBox} from "@mui/icons-material";
import {Button} from "@mui/material";


const Certificates = () => {
    return (
        <>
            <div className='columns is-justify-content-center'>
                <div className='column is-10'>
                    <div className='columns is-multiline'>

                        <div className='column is-12  welcome__master has-text-left'>
                            <h2 className='has-text-right borderbotblack pb-3'>
                                مشاهده ُ ویرایش ُ حذف و اضافه کردن گواهینامه
                            </h2>

                            <button className='button textclrseven borderradone my-3 '
                                    onClick={() => nav('/admin/add-event')}>
                                <h2 className='pinar  has-text-weight-bold my-3 mx-3'>
                                    اضافه کردن رویداد جدید
                                </h2>
                                <AddBox/>
                            </button>


                        </div>


                        <div className='column is-12 p-4'>
                            <h2 className='has-text-right borderbotblack pb-3'>
                                لیست گواهینامه ها
                            </h2>


                            <div className='columns is-column-gap-2 is-multiline py-3 is-justify-content-center'>


                                <div className='column is-3 shadowone borderradtwo p-3 my-2'>


                                    <img src="/asset/images/placeholder.png" alt="certificate title"
                                         style={{maxHeight: '20rem'}}/>
                                    <p className='has-text-centered has-text-weight-bold mb-3'>
                                        گواهی نامه فلان چیز
                                    </p>
                                    <Button className='is-float-right'>
                                        ویرایش
                                    </Button>


                                    <Button variant='contained' className='is-float-left'>
                                        حذف
                                    </Button>


                                </div>

                                <div className='column is-3 shadowone borderradtwo p-3 my-2'>


                                    <img src="/asset/images/placeholder.png" alt="certificate title"
                                         style={{maxHeight: '20rem'}}/>
                                    <p className='has-text-centered has-text-weight-bold mb-3'>
                                        گواهی نامه فلان چیز
                                    </p>
                                    <Button className='is-float-right'>
                                        ویرایش
                                    </Button>


                                    <Button variant='contained' className='is-float-left'>
                                        حذف
                                    </Button>


                                </div>

                                <div className='column is-3 shadowone borderradtwo p-3 my-2'>


                                    <img src="/asset/images/placeholder.png" alt="certificate title"
                                         style={{maxHeight: '20rem'}}/>
                                    <p className='has-text-centered has-text-weight-bold mb-3'>
                                        گواهی نامه فلان چیز
                                    </p>
                                    <Button className='is-float-right'>
                                        ویرایش
                                    </Button>


                                    <Button variant='contained' className='is-float-left'>
                                        حذف
                                    </Button>


                                </div>

                                <div className='column is-3 shadowone borderradtwo p-3 my-2'>


                                    <img src="/asset/images/placeholder.png" alt="certificate title"
                                         style={{maxHeight: '20rem'}}/>
                                    <p className='has-text-centered has-text-weight-bold mb-3'>
                                        گواهی نامه فلان چیز
                                    </p>
                                    <Button className='is-float-right'>
                                        ویرایش
                                    </Button>


                                    <Button variant='contained' className='is-float-left'>
                                        حذف
                                    </Button>


                                </div>
                                <div className='column is-3 shadowone borderradtwo p-3 my-2'>


                                    <img src="/asset/images/placeholder.png" alt="certificate title"
                                         style={{maxHeight: '20rem'}}/>
                                    <p className='has-text-centered has-text-weight-bold mb-3'>
                                        گواهی نامه فلان چیز
                                    </p>
                                    <Button className='is-float-right'>
                                        ویرایش
                                    </Button>


                                    <Button variant='contained' className='is-float-left'>
                                        حذف
                                    </Button>


                                </div>
                                <div className='column is-3 shadowone borderradtwo p-3 my-2'>


                                    <img src="/asset/images/placeholder.png" alt="certificate title"
                                         style={{maxHeight: '20rem'}}/>
                                    <p className='has-text-centered has-text-weight-bold mb-3'>
                                        گواهی نامه فلان چیز
                                    </p>
                                    <Button className='is-float-right'>
                                        ویرایش
                                    </Button>


                                    <Button variant='contained' className='is-float-left'>
                                        حذف
                                    </Button>


                                </div>


                            </div>


                        </div>


                    </div>


                </div>


            </div>


        </>
    )
}
export default Certificates;