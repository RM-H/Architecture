import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as Yup from "yup";
import {Spinner} from "../index.js";
import {getCode, verifyCode} from '../../Services/service.js'
import {toast} from "react-toastify";


const Login = () => {

    const [loading, setLoading] = useState(false)
    const [phoneentered, setphoneentered] = useState(false)


    const nav = useNavigate()


    const HandleLogin = async (v) => {

        console.log(v)


        if (phoneentered === false) {
            const form = new FormData
            form.append('phone', v.phone)
            setLoading(true)
            const res = await getCode(form)
            if (res.data.code == 1) {
                setphoneentered(true)
                setLoading(false)
                toast.success('کد ارسال شد')
            } else {
                toast.warning(res.data.error)
            }


        } else {
            const form = new FormData
            form.append('phone', v.phone)
            form.append('code', v.code);
            setLoading(true)
            let resp = await verifyCode(form)


            if (resp.data.code == 1) {

                localStorage.setItem('craftsman', resp.data.user.token)
                setLoading(false)



                toast.success('با موفقیت وارد شدید')

                if (resp.data.register==0) {
                    nav('/dashboard/')
                } else {
                    toast.warning('this condition is not yet difined (Login page)')
                }
            } else {
                setLoading(false)
                setphoneentered(false)
                toast.warning(resp.data.error)
            }

        }

    }


    return (
        <>

            <div className="main-login shadowone animate__animated animate__zoomIn" style={{
                backgroundColor: 'rgba(9,9,9,0.6)',
                backdropFilter: 'blur(0.1rem)'
            }}>
                <input type="checkbox" id="chk" aria-hidden="true"/>

                <div className="signup is-size-5 has-text-centered yekan-regular">
                    <img className='mb-3' src="/asset/icons/logo-white.png" alt="" style={{maxHeight: '6rem'}}/>
                    <h2>
                        به سامانه استادکاران ونار خوش آمدید.
                    </h2>

                </div>

                <div className="login">


                    <Formik initialValues={{phone: '', code: ''}} validationSchema={Yup.object().shape({

                        phone: Yup.string().matches(/^[0-9]+$/, 'فقط عدد').length(11, 'شماره درست وارد نشده است').required('ضروری'),


                    })} onSubmit={(values) => HandleLogin(values)}>
                        {({errors, touched}) => (
                            <Form className='has-text-centered'>


                                <label htmlFor="chk" aria-hidden="true">ورود</label>
                                <Field disabled={phoneentered} className='yekan' type="text" id="phone" name="phone"
                                       placeholder="شماره تلفن"/>
                                <ErrorMessage style={{textAlign: 'center', color: 'white'}} component='p'
                                              className='yekan-regular '
                                              name='phone'/>

                                {
                                    phoneentered && <Field className='yekan' type="tel" id="code" name="code"
                                                           placeholder="کد ارسال شده"


                                    />
                                }

                                <ErrorMessage component='span' className='has-text-danger yekan' name='pswd'/>

                                {
                                    loading ? <Spinner/> :
                                        <button disabled={loading} className='my-4 yekan' type='submit'>
                                            {
                                                phoneentered ? 'ورود' : 'ارسال کد'
                                            }


                                        </button>
                                }


                                {
                                    phoneentered && <button onClick={() => {
                                        setphoneentered(false);

                                    }} style={{backgroundColor: 'rgba(88,86,86,0.39)', border: '1px solid white'}}>
                                        ویرایش/تغییر شماره
                                    </button>
                                }


                            </Form>


                        )}


                    </Formik>

                </div>

            </div>

        </>
    )
}
export default Login;