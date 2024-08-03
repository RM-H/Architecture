import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import {Button, FormControl, MenuItem, Select} from "@mui/material";
import {Spinner} from "../components/index.js";


const Services = () => {
    return (
        <>
            <main className='dvh100 slidercontainer '>

                <div className='columns is-multiline  mx-auto'>

                    <div className='column w100 is-12 bgclrseven py-3'>
                        <p className="is-size-4 textclreight has-text-centered">ما چه کارهایی انجام میدهیم؟</p>
                        <p className="title has-text-centered textclrtwo ">خدمات ما</p>
                    </div>


                    <div className='column w100 is-12'>

                        <Swiper
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}

                            speed={1618}
                            loop={true}
                            navigation={true}
                            pagination={{
                                enabled: true,
                                type: 'bullets'


                            }}


                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            effect='fade'
                            style={{height: '40rem'}}

                        >
                            <SwiperSlide style={{height: '100%'}}>

                                <div className='is-flex is-align-items-end' style={{
                                    backgroundImage: `url('https://wenar-co.com/static/images/home/carousel/landscap_design.jpg')`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '100%',


                                }}>

                                    <div className='has-text-white container bgblur shadowtwo p-3 mb-3  '>






                                        <span
                                            className='is-size-5  has-text-weight-bold  borderrad1 bgclrseven p-3 borderradtwo  '
                                        >
                                           طراحی محوطه
                                        </span>


                                    </div>


                                </div>


                            </SwiperSlide>

                            <SwiperSlide style={{height: '100%'}}>

                                <div className='is-flex is-align-items-end' style={{
                                    backgroundImage: `url('https://wenar-co.com/static/images/home/carousel/exterior_design.jpg')`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '100%',


                                }}>

                                    <div className='has-text-white container bgblur shadowtwo p-3 mb-3  '>






                                        <span
                                            className='is-size-5  has-text-weight-bold  borderrad1 bgclrseven p-3 borderradtwo  '
                                        >
                                           طراحی نما
                                        </span>


                                    </div>


                                </div>


                            </SwiperSlide>

                            <SwiperSlide style={{height: '100%'}}>

                                <div className='is-flex is-align-items-end' style={{
                                    backgroundImage: `url('https://wenar-co.com/static/images/home/carousel/interior_design.jpg')`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '100%',


                                }}>

                                    <div className='has-text-white container bgblur shadowtwo p-3 mb-3  '>






                                        <span
                                            className='is-size-5  has-text-weight-bold  borderrad1 bgclrseven p-3 borderradtwo  '
                                        >
                                           طراحی داخلی
                                        </span>


                                    </div>


                                </div>


                            </SwiperSlide>


                        </Swiper>

                    </div>


                    <div className='column w100 is-12 bgclrseven py-3'>
                        <p className="is-size-4 textclreight has-text-centered">مابا چه تعرفه ای خدمات ارائه میدهیم؟</p>
                        <p className="title has-text-centered textclrtwo ">تخمین قیمت </p>
                    </div>



                    <div className='column mt-3 is-12 is-flex is-justify-content-center'>
                        <div className='service-prices-box borderradtwo shadowone bgclreight p-3'>


                            <article className='textclrtwo is-size-5 has-text-justified mb-4'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </article>

                            <span className='yekan has-text-centered has-text-white is-size-4'> خدمت مورد نظر خود را انتخاب کنید  :  </span>
                            <FormControl className='bgclrtwo w100' variant="filled">


                                <Select
                                    // className='yekan'
                                    //
                                    //
                                    // id="category_id"
                                    // name='category_id'
                                    //
                                    // value={formik.values.category_id}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    //
                                    // error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                                    //
                                    //
                                    // helperText={formik.touched.category_id && formik.errors.category_id}
                                >
                                    <MenuItem className='yekan' value="">
                                        <em>انتخاب کنید</em>
                                    </MenuItem>
                                    {/*{*/}
                                    {/*    provinces !== false ?*/}
                                    {/*        provinces.categories.map((item) => (*/}
                                    {/*            <MenuItem key={item.id} value={item.id}*/}
                                    {/*                      className='yekan'>*/}
                                    {/*                {item.name}*/}
                                    {/*            </MenuItem>*/}
                                    {/*        ))*/}
                                    {/*        :*/}

                                    {/*        <Spinner/>*/}
                                    {/*}*/}


                                </Select>


                            </FormControl>


                            <Button className='yekan mt-4 is-size-5' type='submit'
                                    variant="contained">ادامه</Button>


                        </div>
                    </div>


                    <div className='column is-12 my-6 pb-6 '>

                    <div className='columns is-multiline container mx-auto'>

                            <div className='column is-6'>
                                <article className='my-3 p-3 container is-size-4 has-text-justified'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی
                                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                    زیادی
                                    در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                    نرم
                                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
                                    در زبان
                                    فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                    راهکارها، و
                                    شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                                    جوابگوی سوالات
                                    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </article>

                            </div>


                            <div className='column is-6 has-text-left'>
                                <img src="/asset/images/5.jpg" alt="building" className='services-images borderradtwo'/>

                            </div>


                            <div className='column is-6 has-text-right'>
                                <img src="/asset/images/3.webp" alt="building"
                                     className='services-images borderradtwo'/>

                            </div>

                            <div className='column is-6'>


                                <article className='my-3 p-3 container is-size-4 has-text-justified'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی
                                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                    زیادی
                                    در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                    نرم
                                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
                                    در زبان
                                    فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                    راهکارها، و
                                    شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                                    جوابگوی سوالات
                                    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </article>

                            </div>


                            <div className='column is-6'>
                                <article className='my-3 p-3 container is-size-4 has-text-justified'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی
                                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                    زیادی
                                    در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                    نرم
                                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
                                    در زبان
                                    فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                    راهکارها، و
                                    شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                                    جوابگوی سوالات
                                    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </article>

                            </div>


                            <div className='column is-6 has-text-left'>
                                <img src="/asset/images/6.jpg" alt="building" className='services-images borderradtwo'/>

                            </div>


                        </div>


                    </div>


                </div>


            </main>


        </>
    )
}
export default Services;