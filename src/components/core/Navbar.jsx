import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Typography} from "@mui/material";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import {

    AppRegistration,

    Menu,

    Home,
    Category,
    Article,
    Contacts
} from "@mui/icons-material";


const Navbar = (props) => {

    // using this to make the active page noticeable in navbar
    const [activePage, setActivePage] = useState(0)

    const drawerWidth = 240;
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);


    const handleActivePage = (page) => {
        setActivePage(page)
    }
    const handleDrawerToggle = () => {
        setTimeout(() => setMobileOpen((prevState) => !prevState), 300)

    };


    const nav = useNavigate()

    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography onClick={() => {
                nav('/');
                handleActivePage(0)
                handleDrawerToggle()
            }} className='yekan has-text-weight-bold textclrone' variant="h6" sx={{my: 2}}>
                خانه
            </Typography>

            <Divider sx={{my: 1}}/>


            <List sx={{
                '& .Mui-selected': {
                    border: '0.15rem dashed #31C1A0',
                    borderRadius: '0.5rem',
                    backgroundColor: '#ffffff',
                    mx: 1,
                    justifyContent: 'start',
                    pr: '2rem'
                }
            }}>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 1} onClick={() => {
                        nav('/');
                        handleActivePage(1)
                    }}
                                    sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='yekan' variant="h6" sx={{my: 2}}>
                           خدمات ما
                        </Typography>
                    </ListItemButton>
                </ListItem>

                {/*<ListItem onClick={handleDrawerToggle} disablePadding>*/}
                {/*    <ListItemButton selected={activePage === 2} onClick={() => {*/}
                {/*        nav('/');*/}
                {/*        handleActivePage(2)*/}
                {/*    }}*/}
                {/*                    sx={{textAlign: 'center', height: '3rem'}}>*/}
                {/*        <Typography className='kook' variant="h6" sx={{my: 2}}>*/}
                {/*            بلاگ*/}
                {/*        </Typography>*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 3} onClick={() => {
                        nav('/contact/');
                        handleActivePage(3)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='yekan' variant="h6" sx={{my: 2}}>
                           ارتباط با ما
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 4} onClick={() => {
                        nav('/register/');
                        handleActivePage(4)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='yekan' variant="h6" sx={{my: 2}}>
                           ثبت نام استادکاران
                        </Typography>
                    </ListItemButton>
                </ListItem>



            </List>
        </Box>
    );


    const container = window !== undefined ? () => window().document.body : undefined;


    return (

        <>
            <header>


                <nav className="navbar bgclrfive is-justify-content-center pb-0 "
                     role="navigation"
                     aria-label="main navigation" style={{width: '100%'}}
                >


                    {/*Responsive Drawer*/}
                    <nav>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            anchor='right'
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: {xs: 'block', sm: 'block', md: 'block'},
                                '& .MuiDrawer-paper': {
                                    boxSizing: 'border-box',
                                    width: drawerWidth,
                                    backgroundColor: 'rgba(255,254,254,0.9)',
                                    backdropFilter: 'blur(0.3rem)',
                                    borderLeft: '0.4rem solid #31C1A0'
                                },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>

                    {/*Responsive Drawer*/}

                    <div className='columns m-0 wdith100 navborderbotblack '
                    >


                        <div
                            className='column is-12-mobile is-8-desktop  navpadstart150   '>
                            <div className='is-flex is-flex-direction-row  yekan'>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ml: 1, display: {lg: 'none'}}}
                                >
                                    {/*<Menu/>*/}
                                    {/*responsive logo*/}
                                    <img className='mr-1' src="/asset/icons/logo.png" style={{maxWidth:'6rem' , maxHeight:"4rem"}} alt=""/>
                                </IconButton>


                                <Link to={'/'} title='خرید بلیت کنسرت، همایش و تئاتر' onClick={() => {

                                    handleActivePage(0)
                                }}
                                      className={`navbar-item is-hidden-mobile is-hidden-touch underline px-0 ${activePage === 0 && 'navactive'}`}
                                      style={{alignItems: 'center'}}>
                                    <img src="/asset/icons/logo.png"
                                         style={{maxHeight: '55px'}}/>


                                    {/*بیلیتیم*/}
                                </Link>


                                {/*responsive*/}


                                <div className='is-flex is-flex-direction-row is-hidden-touch '>
                                    <Link title='خرید آنلاین بلیت کنسرت' to={'/'} onClick={() => {

                                        handleActivePage(1)
                                    }
                                    }
                                          className={`navbar-item  underline ${activePage === 1 && 'navactive'}`}>
                                        <Home/>
                                       خانه
                                    </Link>
                                    <Link title='خرید آنلاین بلیت همایش' to={'/'} onClick={() => {

                                        handleActivePage(2)
                                    }
                                    }
                                          className={`navbar-item  underline ${activePage === 2 && 'navactive'}`}>
                                        <Category/>
                                       خدمات ما
                                    </Link>
                                    {/*<Link title='خرید آنلاین بلیت تئاتر' to={'/'} onClick={() => {*/}

                                    {/*    handleActivePage(3)*/}
                                    {/*}*/}
                                    {/*}*/}
                                    {/*      className={`navbar-item  underline ${activePage === 3 && 'navactive'}`}>*/}
                                    {/*    <Article/>*/}
                                    {/*    وبلاگ*/}
                                    {/*</Link>*/}


                                    <Link title='آرشیو ویدئویی برنامه های سایت بیلیتیم
                                    ' to={'/contact/'} onClick={() => {

                                        handleActivePage(4)
                                    }}
                                          className={`navbar-item  underline ${activePage === 4 && 'navactive'}`}>
                                        <Contacts/>
                                       ارتباط با ما
                                    </Link>


                                    <Link title='پیگیری خرید بلیط با کد رهگیری' to={'/register/'} onClick={() => {

                                        handleActivePage(5)
                                    }}
                                          className={`navbar-item  underline ${activePage === 5 && 'navactive'}`}>
                                        <AppRegistration/>
                                       ثبت نام استادکاران
                                    </Link>


                                </div>


                            </div>
                        </div>


                    </div>


                </nav>

            </header>


        </>
    )
}
export default Navbar;