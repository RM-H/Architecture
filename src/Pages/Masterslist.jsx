
import {Mastercard} from '../components'

import {Stack,Pagination} from "@mui/material";


const Masterslist = () => {
    return (
        <>
            <main className="dvh100 py-6" style={{background:'url(/asset/images/7.jpg)' , backgroundSize:'contain' , backgroundRepeat:'no-repeat' , backgroundPosition:'left' , backgroundAttachment:'fixed'}}>
                <div className='columns is-multiline py-6 ' >

                    <div className='column is-12 w100'>
                        <div className='bgclrseven py-3'>
                            <p className="is-size-4 textclreight has-text-centered">به کمک حرفه ای ها نیاز دارید ؟</p>
                            <p className="title has-text-centered textclrtwo ">استادکاران </p>
                        </div>
                    </div>


                    <div className='column is-12 my-2 container mx-auto'>
                        <input className="input is-large yekan is-success"
                            // onChange={(e) => setSearch(e.target.value)}
                               type="text"
                               placeholder='جستجو ...'/>


                        <div className='has-text-right my-3'>

                            <div className='select is-success'>


                                <select color='primary' className='yekan'
                                    // onChange={(e) => setType(e.target.value)}
                                >
                                    <option value=""> حرفه</option>
                                    <option value={1}> کنسرت ها</option>
                                    <option value={2}> تاتر ها</option>
                                    <option value={3}> همایش ها</option>


                                </select>
                            </div>

                            <div className='select is-success mr-3'>


                                <select className='yekan'
                                    // onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value=""> فیلتر 1</option>
                                    {/*{citiesList}*/}

                                </select>
                            </div>

                            <div className='select is-success mr-3 '
                                // onChange={(e) => setSinger(e.target.value)}
                            >

                                <select className='yekan'>
                                    <option value="">فیلتر 2</option>
                                    {/*{Singers}*/}

                                </select>
                            </div>
                        </div>


                    </div>
                    <div className='column is-12 my-2 py-6 container mx-auto ' style={{borderTop:'1px solid #00582a ' , borderBottom:'1px solid #00582a '}}>
                        <div className='columns  is-multiline'>

                            <Mastercard/>

                            <Mastercard/>

                            <Mastercard/>

                            <Mastercard/>

                            <Mastercard/>

                            <Mastercard/>

                            <Mastercard/>
                            <Mastercard/>
                            <Mastercard/>




                            <Stack className='mx-auto mt-4' spacing={2}>

                                <Pagination count={6} color="primary" dir='ltr'/>

                            </Stack>



                        </div>


                    </div>


                    <div className='column my-5 mx-auto is-12 container bgclrtwo ' style={{backdropFilter:'blur(0.3rem)'}}>

                        <article className=" p-3 borderradtwo shadowone   ">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </article>

                    </div>


                </div>


            </main>


        </>
    )
}
export default Masterslist;