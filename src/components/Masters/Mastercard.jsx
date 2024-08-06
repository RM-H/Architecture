import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    Button, Rating

} from "@mui/material";


import {Share, Favorite,} from '@mui/icons-material'

const Mastercard = () => {
    return (
        <>


            <div className="column p-3  is-4 borderradone p-1">


                <Card className='shadowone borderclrsix' sx={{maxWidth: '100%'}}>


                    <CardMedia
                        component="img"
                        height="194"
                        image="/asset/images/3.webp"
                        alt="Paella dish"
                    />
                    <CardHeader


                        title="آقای فلانی"
                        subheader="کتگوری"
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                            شصت و سه درصد گذشته حال و آینده
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button variant='contained' color='primary' className='ml-auto'>اطلاعات بیشتر</Button>
                        <Rating readOnly  name="read-only" precision={0.5} value={3.5} sx={{direction: 'ltr'}} />


                    </CardActions>


                </Card>
            </div>


        </>
    )
}
export default Mastercard;