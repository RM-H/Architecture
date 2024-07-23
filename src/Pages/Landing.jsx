import {Button} from '@mui/material';



const Landing = () => {
    return (
        <>
            <main>


                <div className="columns is-multiline m-0 is-justify-content-center">

                    <div className="column is-12 header">
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
                            <p className="is-size-4 has-text-warning-bold">ما که هستیم؟</p>
                            <p className="title about-us__title mb-6">درباره ما</p>
                            <p className="is-size-5">معماری هر دو فرایند و محصول برنامه ریزی، طراحی و ساخت ساختمان ها
                                و سایر ساختارهای فیزیکی است. معماری آثار، به شکل مادی ساختمان ها، اغلب به
                                عنوان نمادهای فرهنگی و به عنوان آثار هنری شناخته می شود. تمدن های تاریخی
                                اغلب با دستاوردهای معماری خود باقی مانده شناخته می شوند.</p>
                            <Button variant='contained' className="kook mt-6">اطلاعات بیشتر</Button>
                        </div>


                    </div>


                </div>


            </main>


        </>
    )
}
export default Landing;