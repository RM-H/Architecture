import {Button} from '@mui/material';
import {QuestionAnswer, EditCalendar, Map, HomeWork} from '@mui/icons-material'
import {Animatedtexttags} from '../components'


const Landing = () => {
    return (
        <>
            <main>


                <div className="columns is-multiline     is-justify-content-center ">

                    <div className="column  is-12 header has-text-centered">


                        <div
                            className="p-3  textclrtwo mx-auto banner is-flex is-flex-direction-column is-justify-content-center is-align-items-center  shadowone animate__animated animate__zoomIn">



                            <p className='is-size-3 has-text-weight-bold'>
                                درنهایت کیفیت فضاها مهمترین وظیفه معماری است...
                            </p>
                            <p className='is-size-5' style={{textAlign:'justify'}}>
                                دفتر معماری
                                {'  '}

                                <strong className='textclrtwo'>
                                    ((ونار))
                                </strong>

                                {'  '}


                                با ۹ سال‌ سابقه، آماده است‌ تا دانش و تجربه خود را، در اختیار شما
                                عزیزان قرار دهد، برای طراحی و ساخت پروژه‌های لوکس ساختمانی، با کاربری‌های مختلف مسکونی،
                                تجاری،اداری، ویلا و محوطه و....

                            </p>

                        </div>
                        <Animatedtexttags/>




                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%"
                             viewBox="0 0 1600 172" className="shape">
                            <path style={{fill: "rgba(255, 255, 255, 0.24)"}}
                                  d="M-3,108.5S398.468,0.5,799.951.5C1201.47,0.5,1603,108.5,1603,108.5v203H-3v-203Z"></path>
                            <path style={{fill: "rgba(255,255,255,0.66)"}}
                                  d="M-3,137.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                            <path style={{fill: "#ffffff"}}
                                  d="M-3,164.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                        </svg>
                    </div>


                    <div className="column is-6 p-3">


                        <div className="about-us__content has-text-centered">
                            <p className="is-size-4 textclrseven">ما که هستیم؟</p>
                            <p className="title about-us__title mb-6">درباره ما</p>
                            <p className="is-size-5">

                                ونار کلمه ایست در زبان کوردی به معنای آرایش و ترتیب دادن اشیاء، به صورت منظم و دقیق که
                                درنهایت زیبا جلوه نماید.

                                مرکز معماری ونار، فعالیت خود را در کوردستان با هدف بهبود و ارتقاء سطح کیفی معماری منطقه
                                و همچنین احیای ارزش‌های معماری کوردی، شروع کرده‌است.

                                این مجموعه بصورت کاملاً تخصصی با ارائه طرح‌های بدیع، خلاقانه، خاص، زیبا و ماندگار در
                                زمینه طراحی پلان، طراحی نما و طراحی داخلی در کاربری‌های مسکونی، تجاری، اداری، مذهبی و
                                فضای باز، سابقه‌ی درخشانی را از خود بجای گذاشته‌است.

                            </p>
                            <Button variant='contained' color='primary' className="mt-6">اطلاعات بیشتر</Button>
                        </div>


                    </div>


                    <div className='column   is-12 py-3 '>

                        <div className='bgclrseven py-3'>
                            <p className="is-size-4 textclreight has-text-centered">ما چه کارهایی انجام میدهیم؟</p>
                            <p className="title has-text-centered textclrtwo ">خدمات ما</p>
                        </div>


                        <section className="abilities section-animation">
                            <div className="container">
                                <div className="abilities-content is-flex is-justify-content-center m-auto">
                                    <div
                                        className="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center">
                                        <div className="p-2 is-flex is-justify-content-left">
                                            <div className="has-text-left">
                                                <p className="borderbotblack is-size-5 has-text-weight-bold">طراحی</p>
                                                <p className="abilities-content__text">معماری آثار، به شکل مادی ساختمان
                                                    ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می
                                                    شود.</p>
                                            </div>
                                            <div className="abilities-content__img has-text-centered"><img
                                                src="/asset/icons/icon1.png" alt=""/></div>
                                        </div>
                                        <div className="p-2 is-flex is-justify-content-left">
                                            <div className="has-text-left">
                                                <p className="borderbotblack is-size-5 has-text-weight-bold">نظارت
                                                </p>
                                                <p className="abilities-content__text">معماری آثار، به شکل مادی ساختمان
                                                    ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می
                                                    شود.</p>
                                            </div>
                                            <div className="abilities-content__img has-text-centered"><img
                                                src="/asset/icons/icon2.png" alt=""/></div>
                                        </div>
                                        <div className="p-2 is-flex is-justify-content-left">
                                            <div className="has-text-left">
                                                <p className="borderbotblack is-size-5 has-text-weight-bold">اجرا
                                                </p>
                                                <p className="abilities-content__text ">معماری آثار، به شکل مادی ساختمان
                                                    ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می
                                                    شود.</p>
                                            </div>
                                            <div className="abilities-content__img has-text-centered "><img
                                                src="/asset/icons/icon3.png" alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="abilities-content__middel">
                                        <img src="/asset/images/3.webp" alt=""/>
                                    </div>
                                    <div
                                        className="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center ">
                                        <div className="p-2 is-flex">
                                            <div className="abilities-content__img has-text-centered"><img
                                                src="/asset/icons/icon4.png" alt=""/></div>
                                            <div className="">
                                                <p className="borderbotblack is-size-5 has-text-weight-bold">مشاوره
                                                </p>
                                                <p className="abilities-content__text">معماری آثار، به شکل مادی ساختمان
                                                    ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می
                                                    شود.</p>
                                            </div>
                                        </div>
                                        <div className="p-2 is-flex">
                                            <div className="abilities-content__img has-text-centered"><img
                                                src="/asset/icons/icon5.png" alt=""/></div>
                                            <div className="">
                                                <p className="borderbotblack is-size-5 has-text-weight-bold">فروشگاه
                                                    مصالح ساختمانی
                                                </p>
                                                <p className="abilities-content__text">معماری آثار، به شکل مادی ساختمان
                                                    ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می
                                                    شود.</p>
                                            </div>
                                        </div>
                                        <div className="p-2 is-flex">
                                            <div className="abilities-content__img has-text-centered"><img
                                                src="/asset/icons/icon6.png" alt=""/></div>
                                            <div className="">
                                                <p className="borderbotblack is-size-5 has-text-weight-bold">مهندس مشاور
                                                </p>
                                                <p className="abilities-content__text">معماری آثار، به شکل مادی ساختمان
                                                    ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می
                                                    شود.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                    <div className='column  is-12 bgclreight  '>
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%"
                             viewBox="0 0 1600 172" className="shape-reverse">
                            <path style={{fill: "rgba(255, 255, 255, 0.24)"}}
                                  d="M-3,108.5S398.468,0.5,799.951.5C1201.47,0.5,1603,108.5,1603,108.5v203H-3v-203Z"></path>
                            <path style={{fill: "rgba(255,255,255,0.66)"}}
                                  d="M-3,137.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                            <path style={{fill: "#ffffff"}}
                                  d="M-3,164.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                        </svg>


                        <section className="our-projects mt-0 pb-6  section-animation">
                            <div className="container borderradone shadowone bgclrtwo p-6">
                                <div className="columns align-items-center">
                                    <div className="column is-flex is-flex-direction-column justify-content-center ">
                                        <img src="/asset/images/about1.jpg" alt="" className="our-project__img"/>
                                        <div className="our-project__content-box has-text-centered">
                                            {/*<p className="borderbotblack is-size-4 has-text-weight-bold ">فرصت های*/}
                                            {/*    شغلی</p>*/}
                                            <p className="our-project__caption mt-5">معماری هر دو فرایند و محصول برنامه
                                                ریزی، طراحی و ساخت ساختمان ها و سایر ساختارهای فیزیکی است.</p>
                                            <Button variant='contained' className="yekan mt-6">اطلاعات بیشتر</Button>
                                        </div>
                                    </div>
                                    <div className="column is-flex is-flex-direction-column justify-content-center">
                                        <div className="our-project__content-box has-text-centered">
                                            {/*<p className="borderbotblack is-size-4 has-text-weight-bold ">درباره ما</p>*/}
                                            <p className="our-project__caption mt-5">معماری هر دو فرایند و محصول برنامه
                                                ریزی، طراحی و ساخت ساختمان ها و سایر ساختارهای فیزیکی است.</p>
                                            <Button variant='contained' className="yekan mt-6">اطلاعات بیشتر</Button>
                                        </div>
                                        <img src="/asset/images/about2.jpg" alt="" className="our-project__img"/>
                                    </div>
                                    <div className="column is-flex is-flex-direction-column justify-content-center">
                                        <img src="/asset/images/about3.jpg" alt="" className="our-project__img"/>
                                        <div className="our-project__content-box has-text-centered">
                                            {/*<p className="borderbotblack is-size-4 has-text-weight-bold ">ما اجتماعی*/}
                                            {/*    هستیم</p>*/}
                                            <p className="our-project__caption mt-5">معماری هر دو فرایند و محصول برنامه
                                                ریزی، طراحی و ساخت ساختمان ها و سایر ساختارهای فیزیکی است.</p>
                                            <Button variant='contained' className="yekan mt-6">اطلاعات بیشتر</Button>
                                        </div>
                                    </div>
                                    <div className="column is-flex is-flex-direction-column justify-content-center">
                                        <div className="our-project__content-box has-text-centered">
                                            {/*<p className="borderbotblack is-size-4 has-text-weight-bold ">پروژه های*/}
                                            {/*    من</p>*/}
                                            <p className="our-project__caption mt-5">معماری هر دو فرایند و محصول برنامه
                                                ریزی، طراحی و ساخت ساختمان ها و سایر ساختارهای فیزیکی است.</p>
                                            <Button variant='contained' className="yekan mt-6">اطلاعات بیشتر</Button>
                                        </div>
                                        <img src="/asset/images/about4.jpg" alt="" className="our-project__img"/>
                                    </div>
                                </div>
                            </div>

                        </section>


                    </div>

                    <div className='column is-12 our-services   ' style={{width: '100%'}}>
                        <div className='bgclrseven py-3'>
                            <p className="is-size-4 textclreight has-text-centered">
                                ماچگونه کار میکنیم و مهارت های ما چیست ؟
                            </p>
                            <p className="title has-text-centered textclrtwo ">روش و مهارت های ما</p>
                        </div>


                        <div className='container borderradone shadowone mb-6 my-3 pb-6 px-3'
                             style={{backdropFilter: 'blur(0.6rem)', borderRadius: '3rem'}}>

                            <div
                                className=" is-column-gap-2 py-3 is-flex is-align-items-center is-justify-content-space-between section-animation ">
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered">
                                    <div className="how-it-work__box-top mb-1 ">
                                        <QuestionAnswer className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">مشاوره رایگان</p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered "
                                     style={{marginTop: '8rem'}}>
                                    <div className="how-it-work__box-top mb-1 ">
                                        <EditCalendar className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">امضای قرارداد</p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered "
                                     style={{marginTop: '8rem'}}>
                                    <div className="how-it-work__box-top mb-1 ">
                                        <Map className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">طراحی و طرح
                                            ریز</p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered">
                                    <div className="how-it-work__box-top mb-1 ">
                                        <HomeWork className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">شروع ساخت و
                                            ساز</p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                            </div>


                            <div
                                className=" is-column-gap-2 py-3 is-flex is-align-items-center is-justify-content-space-between section-animation ">
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered mt-10 ">
                                    <div className="how-it-work__box-top mb-1 ">
                                        <QuestionAnswer className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">معماری با شرایط
                                            اقلیمی </p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered ">
                                    <div className="how-it-work__box-top mb-1 ">
                                        <EditCalendar className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">معماری کوردی </p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered ">
                                    <div className="how-it-work__box-top mb-1 ">
                                        <Map className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven">طراحان و
                                            مهندسان </p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>
                                <div className="bgclrtwo shadowone borderclrsix borderradone has-text-centered mt-10">
                                    <div className="how-it-work__box-top mb-1 ">
                                        <HomeWork className='is-size-1 textclreight'/>
                                    </div>
                                    <div className="how-it-work__box-content">
                                        <p className="is-size-4 has-text-weight-bold title textclrseven"> کارگاه‌های
                                            معماری </p>
                                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                </div>


                            </div>
                        </div>


                        {/*<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%"*/}
                        {/*     viewBox="0 0 1600 172" style={{marginBottom: '-0.7rem'}}>*/}
                        {/*    <path style={{fill: "rgba(0,88,42,0.33)"}}*/}
                        {/*          d="M-3,108.5S398.468,0.5,799.951.5C1201.47,0.5,1603,108.5,1603,108.5v203H-3v-203Z"></path>*/}
                        {/*    <path style={{fill: "rgba(0,88,42,0.66)"}}*/}
                        {/*          d="M-3,137.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>*/}
                        {/*    <path style={{fill: "#00582a"}}*/}
                        {/*          d="M-3,164.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>*/}
                        {/*</svg>*/}


                    </div>


                </div>


            </main>


        </>
    )
}
export default Landing;