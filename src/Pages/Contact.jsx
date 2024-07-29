import {ContactBoxone,ContactMap} from '../components'


const Contact = () => {
    return (

        <>
            <main>

                <div className='columns   is-multiline mx-auto py-6 mt-3 '>


                    <div className='column w100 is-12 mt-6'>

                        {/*<img src={icon} alt="icon" style={{transform: 'translateY(1rem) translateX(1.6rem)'}}/>*/}

                        <div className='bgclrseven py-3 '>
                            <p className="is-size-4 textclreight has-text-centered">24/7</p>
                            <p className="title has-text-centered textclrtwo ">تماس با ما</p>
                        </div>


                        <p className='my-4 container'>

                            جهت ارتباط با مجموعه ونار میتوانید از راه های ارتباطی زیر استفاده کنید.

                        </p>


                    </div>

                    <ContactBoxone/>
                   <ContactMap/>


                    <div className='column is-12 my-6 pb-6 '>



                        <article className='my-3 container'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </article>
                    </div>


                </div>


            </main>


        </>
    )
}
export default Contact;