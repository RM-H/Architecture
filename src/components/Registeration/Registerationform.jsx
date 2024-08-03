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
import {getSplash, getCities} from '../../Services/service.js'


import {useNavigate} from 'react-router-dom'
import {Spinner} from "../index.js";
import {toast} from "react-toastify";
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


    // avatar nc pic and shenasname
    const [avatar, setAvatar] = useState('')
    const [ncpic, setNcpic] = useState('')
    const [shenasname, setShenasname] = useState('')


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


    const handlesubmit = async (val, avatar, nc, shenas) => {
        const formdata = new FormData()
        formdata.append('token', localStorage.getItem('craftsman'))
        formdata.append('name', val.name)
        formdata.append('family', val.lastName)
        formdata.append('province_id', val.province_id)
        formdata.append('city_id', val.city_id)
        formdata.append('category_id', val.category_id)
        formdata.append('address', val.address)
        formdata.append('about', val.about)
        formdata.append('avatar', avatar)
        formdata.append('nc_pic', nc)
        formdata.append('shenas_pic', shenas)


        if (nc == '' || shenas == '') {
            toast.error('تصویر کارت ملی یا شناسنامه انتخاب نشده است.')
        } else {
            console.log(val)

        }


    }


    const validationSchema = yup.object({

        firstName: yup.string().max(25, 'نام بصورت صحیح وارد نشده').required('ضروری'),
        lastName: yup.string().max(40, ' باید کوتاه تر باشد').required('ضروری'),
        province_id: yup.number().required('ضروری'),
        city_id: yup.number().required('ضروری'),
        category_id: yup.number().required('ضروری'),
        address: yup.string().max(500, 'بیش از حد طولانی است').required('ضروری'),
        about: yup.string().max(500, 'بیش از حد طولانی است').required('ضروری'),


    });


    // having initial values dynamically change

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            province_id: '',
            city_id: '',

            category_id: '',
            address: '',
            about: '',


        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            handlesubmit(values, avatar, ncpic, shenasname)

        },
    });


    return (
        <>
            <div className='column is-12 container py-6'>


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
                                            <FormControl className='yekan w100' variant="outlined">

                                                <span className='yekan'> استان :  </span>
                                                <Select
                                                    id="province_id"
                                                    name='province_id'
                                                    className='yekan'

                                                    value={formik.values.province_id}
                                                    onChange={(e) => {
                                                        formik.handleChange(e);
                                                        setselectedProvinces(e.target.value)

                                                    }}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.province_id && Boolean(formik.errors.province_id)}


                                                    helperText={formik.touched.province_id && formik.errors.province_id}
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


                                                    id="city_id"
                                                    name='city_id'
                                                    className='yekan'

                                                    value={formik.values.city_id}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.city_id && Boolean(formik.errors.city_id)}


                                                    helperText={formik.touched.city_id && formik.errors.city_id}
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

                                                <span className='yekan'> آدرس :  </span>
                                                <TextField
                                                    className='yekan'
                                                    id="address"
                                                    name='address'
                                                    multiline
                                                    minRows='4'

                                                    value={formik.values.address}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.address && Boolean(formik.errors.address)}


                                                    helperText={formik.touched.address && formik.errors.address}


                                                />


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> درباره من :  </span>
                                                <TextField
                                                    className='yekan'
                                                    id="about"
                                                    name='about'
                                                    multiline
                                                    minRows='4'


                                                    value={formik.values.about}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.about && Boolean(formik.errors.about)}


                                                    helperText={formik.touched.about && formik.errors.about}


                                                />


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan'> حوزه فعالیت :  </span>
                                                <Select
                                                    className='yekan'


                                                    id="category_id"
                                                    name='category_id'

                                                    value={formik.values.category_id}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    error={formik.touched.category_id && Boolean(formik.errors.category_id)}


                                                    helperText={formik.touched.category_id && formik.errors.category_id}
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
                                                <img
                                                    src={avatar == '' ? '/asset/images/placeholder-person.jpg' : URL.createObjectURL(avatar)}
                                                    alt="avatar" width='31%' style={{maxHeight: '9rem'}}/>

                                                <input onChange={(e) => setAvatar(e.target.files[0])}
                                                       className='yekan input'
                                                       type='file' id="img"
                                                       name="img"/>


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined"
                                                         sx={{alignItems: 'center', justifyContent: 'baseline'}}>
                                                <span className='yekan'> کارت ملی :  </span>
                                                <img
                                                    src={ncpic == '' ? '/asset/images/placeholder.png' : URL.createObjectURL(ncpic)}
                                                    alt="NC pic" width='31%' style={{maxHeight: '9rem'}}/>

                                                <input onChange={(e) => setNcpic(e.target.files[0])}
                                                       className='yekan input'
                                                       type='file' id="img"
                                                       name="img"/>


                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12} sm={6}>
                                            <FormControl className='w100' variant="outlined"
                                                         sx={{alignItems: 'center', justifyContent: 'baseline'}}>
                                                <span className='yekan'> تصویر شناسنامه :  </span>
                                                <img
                                                    src={shenasname == '' ? '/asset/images/placeholder.png' : URL.createObjectURL(shenasname)}
                                                    alt="id card" width='31%' style={{maxHeight: '9rem'}}/>

                                                <input onChange={(e) => setShenasname(e.target.files[0])}
                                                       className='yekan input'
                                                       type='file' id="img"
                                                       name="img"/>


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
            </div>


        </>
    )
}
export default Registerform;