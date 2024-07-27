import {Animatedtext} from '../index.js'
import {Link} from "react-router-dom";
import {PhoneEnabled, Place} from '@mui/icons-material'

const Footer = () => {
    return (
        <>
            <footer className="w100 bgclrone textclrtwo mt-6" style={{minHeight: "15rem"}}>
                <div
                    className='bgclrsix px-3 mx-auto borderradone shadowone is-flex is-align-items-center is-justify-content-center'
                    style={{width: '66%', minHeight: '6rem', transform: 'translateY(-4rem)'}}>

                    <p className='is-size-3 has-text-weight-bold w100 has-text-centered'>
                        از این به بعد کارهای
                        {'   '}
                        <Animatedtext/>
                        رو به
                        {'   '}
                        <strong>
                            ونار
                        </strong>
                        {'   '}
                        بسپار !


                    </p>

                    <img src="/asset/icons/logo.png" alt="" style={{marginLeft: 0, marginRight: 'auto'}}/>


                </div>


                <div className="container columns mx-auto">
                    <div className='column is-4 htc p-2 '>
                        <h5 className='has-text-weight-bold is-size-5 has-text-white mb-3 borderclrthree pb-3 '>ونار</h5>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>

                    </div>

                    <div className='column is-4 htc p-2 '>
                        <h5 className='has-text-weight-bold is-size-5 has-text-white mb-3 borderclrthree pb-3 '>لینک های
                            سریع</h5>
                        <aside className='menu'>
                            <ul className=" ">
                                <li className='my-2 '><Link to={'/'}
                                                            className='has-text-white is-align-items-centeris-align-items-centeris-align-items-centerfooterhover  '> خانه</Link>
                                </li>

                                <li className='my-2 '><Link to={'/'}
                                                            className='has-text-white is-align-items-centeris-align-items-centeris-align-items-centerfooterhover  '> خدمات ما</Link>
                                </li>

                                <li className='my-2 '><Link to={'/'}
                                                            className='has-text-white footerhover  '> بلاگ</Link>
                                </li>

                                <li className='my-2 '><Link to={'/'}
                                                            className='has-text-white footerhover  '> ثبت نام استادکاران</Link>
                                </li>

                            </ul>

                        </aside>
                    </div>

                    <div className='column is-4 htc p-2 '>
                        <h5 className='has-text-weight-bold is-size-5 has-text-white mb-3 borderclrthree pb-3 '>ارتباط
                            با ما</h5>

                        <aside className='menu'>
                            <ul className=" ">
                                <li className='my-2  is-flex  '><Link to={'/'}
                                                                      className='textclrtwo footerhover'>
                                    <PhoneEnabled/>
                                    123456789

                                </Link>
                                </li>

                                <li className='my-2   is-flex '><Link to={'/'}
                                                                      className='textclrtwo footerhover   '>
                                    <Place/>

                                    لورم ایپسوم متن ساختگی با تولید
                                    سادگی نامفهوم از صنعت چاپ

                                </Link>
                                </li>


                            </ul>

                        </aside>

                    </div>

                </div>


                <div className='has-text-left is-size-6 '>
                    طراحی شده توسط من.
                </div>

            </footer>


        </>
    )
}
export default Footer;