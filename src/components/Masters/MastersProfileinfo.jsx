import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton, Rating, Table, TableBody, TableCell, TableRow,
    Typography, Divider
} from "@mui/material";
import {Download,Call } from "@mui/icons-material";


const MastersProfileinfo = () => {
    return (
        <>
            <div className="column is-12 pb-3 ">
                <div className="columns is-multiline ">
                    <div className="column is-3 mt-5">
                        <Card className='shadowone ' sx={{maxWidth: '100%' , position: 'sticky' , top:'10%'}}>


                            <CardMedia
                                component="img"

                                image="/asset/images/placeholder-person.jpg"
                                alt="Paella dish"
                                className='mx-auto'

                                sx={{maxWidth: '15rem', borderRadius: '50%'}}
                            />


                            <CardHeader


                                title="آقای فلانی"

                            />

                            <CardContent>


                                <div className='is-flex is-justify-content-center mb-3  '>
                                    <Typography component="legend">میزان رضایت : </Typography>

                                    <Rating name="read-only" value={3} readOnly/>
                                    <Typography component="legend">3 ( از میان 100 رای)</Typography>
                                </div>


                                <Table aria-label="simple table">

                                    <TableBody>


                                        <TableRow

                                        >

                                            <TableCell align="right">حوزه فعالیت </TableCell>
                                            <TableCell align="left">2</TableCell>

                                        </TableRow>

                                        <TableRow

                                        >

                                            <TableCell align="right">تاریخ عضویت</TableCell>
                                            <TableCell align="right">2</TableCell>

                                        </TableRow>


                                        <TableRow

                                        >

                                            <TableCell align="right">استان </TableCell>
                                            <TableCell align="right">2</TableCell>

                                        </TableRow>


                                        <TableRow

                                        >

                                            <TableCell align="right">شهر </TableCell>
                                            <TableCell align="right">2</TableCell>

                                        </TableRow>


                                        <TableRow

                                        >

                                            <TableCell align="right">تاریخ عضویت</TableCell>
                                            <TableCell align="right">2</TableCell>

                                        </TableRow>

                                    </TableBody>
                                </Table>


                                <Button variant="contained" className='w100 my-4 is-size-5' endIcon={<Call />}>
                                    123456789
                                </Button>
                            </CardContent>


                        </Card>

                    </div>


                    <div className='column is-9 pr-2 '>
                        <div className="profile-banner is-flex is-justify-content-center is-align-items-center"
                             style={{backgroundImage: `url(/asset/images/8.jpg)`, backgroundSize: 'cover'}}>

                            <div>
                                <p className='is-size-1 has-text-weight-bold has-text-centered'>
                                    سیستم مدیریت ایشیم
                                </p>
                            </div>


                        </div>


                        <div className='my-3 p-3 '>
                            <h2 className='borderbotblack pb-2 has-text-weight-bold'>
                                درباره فلانی
                            </h2>

                            <article className='my-2 has-text-justified'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                                دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                                گیرد.
                            </article>

                            <h3 className='borderbotblack mt-5 pb-2 has-text-weight-bold'>
                                 گواهینامه ها و دوره ها
                            </h3>

                            <div className='columns is-multiline  '>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>
                                <div className='column is-4 p-4 has-text-centered '>
                                    <div className='shadowone borderradtwo borderclrseven pb-3'>
                                        <img src="/asset/images/5.jpg" alt="" className='shadowone borderradtwotop w100'
                                             style={{maxHeight: '23rem'}}/>
                                        <h4 className='my-2 has-text-right px-3'>
                                            عنوان گواهینامه
                                            <a className='is-float-left textclrseven' href="/asset/images/5.jpg"
                                               target='_blank'>
                                                <Download/>
                                            </a>

                                        </h4>

                                    </div>

                                </div>


                            </div>


                        </div>


                    </div>

                </div>

            </div>


        </>
    )
}
export default MastersProfileinfo;