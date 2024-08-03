import {useEffect, useState} from "react";
import {Login} from '../components'

import {Button} from "@mui/material";
import {scrolltoTop} from '../Services/service.js'


const RegisterPage = () => {


    useEffect(() => {
        scrolltoTop()


    }, []);

    const [show, setShow] = useState(0);
    let content

    if (show == 0) {
        content = <>


            <div className='column is-9 my-6 p-3  shadowone  bgclrtwo borderradtwo'>


                <p className='yekan is-size-5'>

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                    از
                    طراحان گرافیک
                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                    و
                    برای شرایط
                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                    می
                    باشد،
                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                    متخصصان را می
                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و
                    فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
                    تمام و
                    دشواری
                    موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل
                    حروفچینی
                    دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
                    مورد
                    استفاده قرار


                </p>
                <Button variant='contained' onClick={() => setShow(1)} className="yekan my-3">ادامه </Button>


            </div>


        </>
    } else if (show == 1) {
        content = <Login/>

    }
    return (

        <>

        <div className="columns m-0" style={{
            minHeight: '100dvh',
            textAlign: 'center',
            backgroundImage: 'url(/asset/images/2.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>


            {
                content
            }




        </div>


</>
)

}
export default RegisterPage;
;