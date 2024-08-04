import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    Button

} from "@mui/material";


import {Share, Favorite,} from '@mui/icons-material'

const Mastercard = () => {
    return (
        <>


            <div className="column p-3  is-4 borderradone p-1">


                <Card className='shadowone borderclrsix' sx={{maxWidth: '100%'}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: 'red'}} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title="آقای فلانی"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/asset/images/3.webp"
                        alt="Paella dish"
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
                        <Button variant='contained' color='primary' className='ml-auto' >اطلاعات بیشتر</Button>
                        <IconButton aria-label="add to favorites">
                            <Favorite/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share/>
                        </IconButton>



                    </CardActions>
                    {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
                    {/*    <CardContent>*/}
                    {/*        <Typography paragraph>Method:</Typography>*/}
                    {/*        <Typography paragraph>*/}
                    {/*            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set*/}
                    {/*            aside for 10 minutes.*/}
                    {/*        </Typography>*/}

                    {/*    </CardContent>*/}
                    {/*</Collapse>*/}
                </Card>
            </div>


        </>
    )
}
export default Mastercard;