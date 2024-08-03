import Grid from '@mui/material/Unstable_Grid2'
import {useFormik} from "formik";
import {
    Button,
    FormControl,

    MenuItem,
    Select,

    TextField,
    Typography

} from "@mui/material";

import * as yup from "yup";

import {useState, useEffect} from "react";
import {getSplash,getCities} from '../../Services/service.js'


import {useNavigate} from 'react-router-dom'
import {Spinner} from "../index.js";
// import {saveUserinfo, getProvinces, getCities, editUserinfo} from '../services/service.js'
// import {toast} from "react-toastify";
// import {Spinner} from '../components/index.js'


const Registerform = () => {


    const userphone = localStorage.getItem('userphone')
    const user = JSON.parse(localStorage.getItem('userinfo'))
    const nav = useNavigate()

    const [provinces, setProvinces] = useState(false)
    const [selectedprovinces, setselectedProvinces] = useState(false)
    const [cities, setCities] = useState(false)
    // avatar
    const [img, setImg] = useState('')

    const getprovinces = async () => {
        const response = await getSplash()
        if (response.data.code === 1) {
            setProvinces(response.data)
        }
    }


    const citiesList = async () => {
        const response = await getCities(selectedprovinces)
        if (response.data.code === 1) {
            setCities(response.data)
        }
    }
    useEffect(() => {

        getprovinces()
    }, []);


    useEffect(() => {
        citiesList()
    }, [selectedprovinces]);


    // loading animation
    const [loading, setLoading] = useState(false)


    const handlesubmit = async (val) => {

        // checking to see if NC pic is selected


        // editing user info
        // if (user && user.user.confirm == 2) {
        //
        //     const formdataedit = new FormData()
        //
        //     formdataedit.append('name', val.firstName)
        //     formdataedit.append('family', val.lastName)
        //
        //     formdataedit.append('phone', val.tel)
        //     formdataedit.append('password', val.password)
        //     formdataedit.append('nc', val.nc)
        //     formdataedit.append('province_id', val.province)
        //     formdataedit.append('city_id', val.city)
        //
        //
        //
        //     formdataedit.append('token', user.user.token)
        //
        //
        //     setLoading(true)
        //     const response = await editUserinfo(formdataedit)
        //     if (response.data.code == 1) {
        //
        //         toast.success('اطلاعات شخصی شما با موفقیت بروز شد')
        //         localStorage.setItem('userinfo', JSON.stringify(response.data))
        //         nav('/home/results')
        //         setLoading(false)
        //     } else {
        //         toast.warning(response.data.error)
        //         setLoading(false)
        //     }
        //
        //
        // } else {
        //
        //     const formdata = new FormData()
        //
        //     formdata.append('name', val.firstName)
        //     formdata.append('family', val.lastName)
        //
        //     formdata.append('phone', val.tel)
        //     formdata.append('password', val.password)
        //     formdata.append('nc', val.nc)
        //     formdata.append('province_id', val.province)
        //     formdata.append('city_id', val.city)
        //
        //
        //
        //
        //
        //     setLoading(true)
        //     const response = await saveUserinfo(formdata)
        //     if (response.data.code == 1) {
        //
        //         toast.success('اطلاعات شخصی شما با موفقیت ثبت شد')
        //         localStorage.setItem('userinfo', JSON.stringify(response.data))
        //         nav('/home/results')
        //         setLoading(false)
        //     } else {
        //         toast.warning(response.data.error)
        //         setLoading(false)
        //     }
        //
        // }


    }


    const validationSchema = yup.object({

        firstName: yup.string().max(25, 'نام بصورت صحیح وارد نشده').required('ضروری'),
        lastName: yup.string().max(40, ' باید کوتاه تر باشد').required('ضروری'),


        tel: yup.string().required('ضروری'),
        nc: yup.string().required('ضروری').length(10),
        province: yup.number().required('ضروری'),
        city: yup.number().required('ضروری'),


    });


    // having initial values dynamically change

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            tel: '',
            nc: '',
            province: '',
            city: '',
            password: ''

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handlesubmit(values)

        },
    });


    return (
        <>
            <main>


                <Grid container className='animate__animated animate__zoomIn' sx={{


                    textAlign: 'center',
                    backgroundImage: 'url(/asset/images/2.jpg)',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>


                    <Grid xs={12}>
                        <Grid container sx={{justifyContent: 'center'}}>


                            <Grid xs={12}>


                                <form onSubmit={formik.handleSubmit} className='yekan'>
                                    <Grid container columnSpacing={3} rowSpacing={5} className='shadowone'
                                          sx={{
                                              '& .MuiInputBase-root': {fontFamily: 'yekan-reg'},
                                              p: 3,
                                              bgcolor: '#ffffff',
                                              borderRadius: '0.6rem'
                                          }}>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100 yekan' variant="outlined">

                                                <span className='yekan'> نام  :  </span>
                                                <TextField

                                                    id="firstName"
                                                    name='firstName'

                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}


                                                    helperText={formik.touched.firstName && formik.errors.firstName}

                                                />


                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> نام خانوادگی :  </span>
                                                <TextField
                                                    id="lastName"
                                                    name='lastName'
                                                    value={formik.values.lastName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}


                                                    helperText={formik.touched.lastName && formik.errors.lastName}

                                                />


                                            </FormControl>
                                        </Grid>


                                        {/*row 2*/}

                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> شماره تلفن :  </span>
                                                <TextField
                                                    id="tel"
                                                    name='tel'
                                                    value={formik.values.tel}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.tel && Boolean(formik.errors.tel)}


                                                    helperText={formik.touched.tel && formik.errors.tel}

                                                />


                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> کد ملی :  </span>
                                                <TextField
                                                    id="nc"
                                                    name='nc'

                                                    value={formik.values.nc}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.nc && Boolean(formik.errors.nc)}


                                                    helperText={formik.touched.nc && formik.errors.nc}


                                                />


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='yekan w100' variant="outlined">

                                                <span className='yekan'> استان :  </span>
                                                <Select
                                                    id="province"
                                                    name='province'
                                                    className='yekan'

                                                    value={formik.values.province}
                                                    onChange={(e) => {
                                                        formik.handleChange(e);
                                                        setselectedProvinces(e.target.value)

                                                    }}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.province && Boolean(formik.errors.province)}


                                                    helperText={formik.touched.province && formik.errors.province}
                                                >
                                                    <MenuItem className='yekan' value="">
                                                        <em>انتخاب کنید</em>
                                                    </MenuItem>
                                                    {
                                                        provinces !== false ?
                                                            provinces.provinces.map((item) => (
                                                                <MenuItem key={item.id} value={item.id}
                                                                          className='yekan'>
                                                                    {item.name}
                                                                </MenuItem>
                                                            ))
                                                            :

                                                            <Spinner/>
                                                    }


                                                </Select>


                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> شهر :  </span>
                                                <Select


                                                    id="city"
                                                    name='city'
                                                    className='yekan'

                                                    value={formik.values.city}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.city && Boolean(formik.errors.city)}


                                                    helperText={formik.touched.city && formik.errors.city}
                                                >
                                                    <MenuItem className='yekan' value="">
                                                        <em>انتخاب کنید</em>
                                                    </MenuItem>
                                                    {
                                                        cities !== false ?
                                                            cities.cities.map((item) => (
                                                                <MenuItem key={item.id} value={item.id}
                                                                          className='yekan'>
                                                                    {item.name}
                                                                </MenuItem>
                                                            ))
                                                            :

                                                            <Spinner/>
                                                    }


                                                </Select>


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> حوزه فعالیت :  </span>
                                                <Select


                                                    id="city"
                                                    name='city'

                                                    value={formik.values.city}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.city && Boolean(formik.errors.city)}


                                                    helperText={formik.touched.city && formik.errors.city}
                                                >
                                                    <MenuItem className='yekan' value="">
                                                        <em>انتخاب کنید</em>
                                                    </MenuItem>
                                                    {
                                                        provinces !== false ?
                                                            provinces.categories.map((item) => (
                                                                <MenuItem key={item.id} value={item.id}
                                                                          className='yekan'>
                                                                    {item.name}
                                                                </MenuItem>
                                                            ))
                                                            :

                                                            <Spinner/>
                                                    }


                                                </Select>


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined"
                                                         sx={{alignItems: 'center', justifyContent: 'baseline'}}>
                                                <span className='yekan'> تصویر :  </span>
                                                {/*<img*/}
                                                {/*    src={img == '' ? reduxloading === false && `${baseurl}/${user.user.avatar}` : URL.createObjectURL(img)}*/}
                                                {/*    alt="avatar" width='31%'/>*/}

                                                <input onChange={(e) => setImg(e.target.files[0])}
                                                       className='yekan input'
                                                       type='file' id="img"
                                                       name="img"/>


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={12}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> درباره :  </span>
                                                <TextField
                                                    multiline
                                                    rows={4}
                                                    id="nc"
                                                    name='nc'

                                                    value={formik.values.nc}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.nc && Boolean(formik.errors.nc)}


                                                    helperText={formik.touched.nc && formik.errors.nc}


                                                />


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
                                            {
                                                loading ? <Spinner/> :
                                                    <Button className='yekan w100' type='submit'
                                                            variant="contained">ادامه</Button>
                                            }

                                        </Grid>


                                    </Grid>
                                </form>

                            </Grid>


                        </Grid>
                    </Grid>

                </Grid>
            </main>


        </>
    )
}
export default Registerform;