import {LocationOn, Phone, Share} from "@mui/icons-material";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import {Button} from '@mui/material'


const ContactBoxOne = () => {
    const [sent, setSent] = useState()

    const handlesubmit = () => {

    }


    return (
        <>

            <div className='column  is-12 container'>
                <div className='columns is-multiline m-0'>
                    <div
                        className='column is-4-desktop is-12-mobile is-12-tablet borderclrsix shadowone borderradleft  is-flex is-align-content-center'>
                        <div className='columns m-0 p-3 is-multiline'>
                            <div className='column is-12'>

                                <h3 className='is-size-6-mobile is-size-5-desktop is-flex is-align-items-center'>

                                      <span
                                          className="has-text-white clrtwo  ml-3 my-auto p-2  is-flex is-justify-content-center align-items-center">
                                   <Phone className=''/>
                                         </span>

                                    شماره تماس
                                </h3>
                                <p className='mt-3'>
                                    <a href={`tel: 123456789`} className=' is-size-5-desktop'>

                                        123456789

                                        {/*{*/}
                                        {/*    phone*/}
                                        {/*}*/}


                                    </a>
                                </p>


                            </div>

                            <div className='column is-12'>
                                <h3 className='is-size-6-mobile is-size-5-desktop is-flex is-align-items-center'>

                                      <span
                                          className="has-text-white clrtwo  ml-3 p-2 borderrad1 is-flex is-justify-content-center align-items-center">
                                   <LocationOn/>
                                         </span>
                                    آدرس


                                </h3>

                                <address className=' is-size-6-desktop mt-3' style={{fontStyle: 'normal'}}>
                                    {/*{*/}
                                    {/*    <a className='has-text-black'*/}
                                    {/*       href={`https://www.google.com/maps/@${dataneeded.lat},${dataneeded.lng},15z?entry=ttu}`}*/}
                                    {/*       target='_blank'>{address}</a>*/}

                                    {/*}*/}
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </address>


                            </div>

                            <div className='column is-12'>
                                <h3 className='is-size-6-mobile is-size-5-desktop is-flex is-align-items-center'>

                                      <span
                                          className="has-text-white clrtwo p-1 ml-3 p-2 borderradone is-flex is-justify-content-center align-items-center">
                                   <Share/>
                                         </span>
                                    شبکه های اجتماعی


                                </h3>
                                <p className='mt-3 '>
                                    {/*<a href={dataneeded.telegram}> <Telegram className='ml-2 scoialhover'/></a>*/}
                                    {/*<a href={dataneeded.instagram}> <Instagram className='mx-2 scoialhover'/></a>*/}
                                    {/*<a href={dataneeded.whatsapp}> <WhatsApp className='mx-2 scoialhover'/></a>*/}


                                </p>


                            </div>


                        </div>


                    </div>


                    <div className='column is-8-desktop is-12-mobile is-12-tablet shadowone borderradright borderradone bgclrone p-5'>


                        <h2 className='is-size-6-mobile is-size-5-desktop has-text-white mt-1 has-text-weight-bold'>
                            فرم ارتباط با ما
                        </h2>


                        <div className='columns m-0 p-3 is-multiline ' style={{height: '100%'}}>

                            <Formik initialValues={{
                                name: '',
                                phone: '',
                                text: ''
                            }} onSubmit={(values) => handlesubmit(values)}
                                    validationSchema={Yup.object().shape({
                                        name: Yup.string()
                                            .max(50, 'باید کمتر از 50 کاراکتر باشد')
                                            .required('ضروری'),
                                        phone: Yup.string()
                                            .matches(/^[0-9]+$/, 'فقط عدد')
                                            .length(11, 'شماره درست وارد نشده است')
                                            .required('ضروری'),
                                        text: Yup.string()
                                            .max(200, 'باید کمتر از 200 کاراکتر باشد')
                                            .required('ضروری'),
                                    })}


                            >
                                {({errors, touched}) => (

                                    <Form className='w100 columns m-0 is-multiline '>


                                        <div className='column p-1 is-6'>
                                            <label className="label has-text-white  is-size-6 ">نام و نام
                                                خانوادگی</label>
                                            <Field
                                                className='w100 px-4 has-text-white yekan   borderradone is-size-6 has-text-weight-bold'
                                                id="name" name="name"
                                                placeholder=" نام" style={{height: '3rem'}}/>


                                            <ErrorMessage component='span' className=' has-text-danger'
                                                          name='name'/>


                                        </div>


                                        <div className='column p-1 is-6'>

                                            <label className="label has-text-white yekan is-size-6">شماره تماس</label>
                                            <Field
                                                className='w100 px-4 has-text-white yekan  borderradone is-size-6 has-text-weight-bold '
                                                type='tel' id="phone" name="phone"
                                                placeholder="0912345678" style={{height: '3rem'}}/>
                                            <ErrorMessage component='span' className='has-text-danger '
                                                          name='phone'/>


                                        </div>


                                        <div className='column p-1 is-12'>
                                            <label className="label has-text-white  is-size-6">پیغام شما</label>
                                            <Field
                                                id="text"
                                                name="text"
                                                placeholder="متن پیام "
                                                type="text"
                                                as='textarea'
                                                rows='5'
                                                className='w100 px-4 has-text-white yekan  borderrad1 is-size-6 has-text-weight-bold'
                                            />
                                            <ErrorMessage component='span' className='has-text-danger yekan'
                                                          name='text'/>


                                        </div>


                                        <div className='column is-12 mb-3 has-text-centered'>

                                            {

                                                sent ?
                                                    <p className='has-text-success '> پیام شما دریافت
                                                        شد
                                                        !</p> :

                                                        <Button
                                                            variant='contained'
                                                            className='yekan borderradone mt-1 has-text-weight-bold'
                                                            type="submit">ارسال پیام
                                                        </Button>





                                            }

                                        </div>


                                    </Form>
                                )}

                            </Formik>


                        </div>


                    </div>


                </div>


            </div>


        </>
    )
}
export default ContactBoxOne;