import {Button} from "@mui/material";

const Tiles = () => {
    return (
        <>
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


        </>
    )
}
export default Tiles;