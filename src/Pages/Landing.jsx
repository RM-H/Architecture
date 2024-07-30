import {Animatedtexttags, Services, Tiles, Abilities, About} from '../components'


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
                            <p className='is-size-5' style={{textAlign: 'justify'}}>
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
                             viewBox="0 0 1600 172" className="shape is-hidden-mobile">
                            <path style={{fill: "rgba(255, 255, 255, 0.24)"}}
                                  d="M-3,108.5S398.468,0.5,799.951.5C1201.47,0.5,1603,108.5,1603,108.5v203H-3v-203Z"></path>
                            <path style={{fill: "rgba(255,255,255,0.66)"}}
                                  d="M-3,137.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                            <path style={{fill: "#ffffff"}}
                                  d="M-3,164.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                        </svg>
                    </div>


                    <About/>

                    <Services/>

                    <Tiles/>
                    <Abilities/>


                </div>


            </main>


        </>
    )
}
export default Landing;