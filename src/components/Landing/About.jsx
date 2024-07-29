import {Button} from "@mui/material";


const About = () => {
    return (
        <>
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

        </>
    )
}
export default About;