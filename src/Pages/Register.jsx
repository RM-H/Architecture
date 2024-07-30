import {useState} from "react";
import {Registerationform} from '../components'
import Registerform from "../components/Registeration/Registerationform.jsx";
import {Button} from "@mui/material";


const RegisterPage = () => {

    const [show, setShow] = useState(false);
    let content

    if (show) {
        content = <Registerationform/>
    } else {
        content =
            <>


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
                <Button variant='contained' onClick={() => setShow(true)} className="yekan my-3">ادامه </Button>
            </>
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
                <div className='column is-9 my-6 p-3  shadowone  bgclrtwo borderradtwo'>
                    {
                        content
                    }

                </div>


            </div>


        </>
    )

}
export default RegisterPage;
;