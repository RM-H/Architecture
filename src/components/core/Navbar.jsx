import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Typography} from "@mui/material";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import {
    ArchiveOutlined,
    EventSeatOutlined,
    ManageSearchOutlined,
    Menu,
    MusicNoteOutlined,
    TheaterComedyOutlined
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
            }} className='pinar' variant="h6" sx={{my: 2}}>
                خانه
            </Typography>

            <Divider sx={{my: 1}}/>


            <List sx={{
                '& .Mui-selected': {
                    border: '0.15rem dashed #601FEB',
                    borderRadius: '0.5rem',
                    backgroundColor: '#ffffff',
                    mx: 1,
                    justifyContent: 'start',
                    pr: '2rem'
                }
            }}>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 1} onClick={() => {
                        nav('/concerts/');
                        handleActivePage(1)
                    }}
                                    sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            بلیت کنسرت
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 2} onClick={() => {
                        nav('/conference/');
                        handleActivePage(2)
                    }}
                                    sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            بلیت همایش
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 3} onClick={() => {
                        nav('/theatre/');
                        handleActivePage(3)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            بلیت تئاتر
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 4} onClick={() => {
                        nav('/live/');
                        handleActivePage(4)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            آرشیو ویدیویی
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 5} onClick={() => {
                        nav('/inquiry/');
                        handleActivePage(5)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            پیگیری خرید
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 6} onClick={() => {
                        nav('/contact/');
                        handleActivePage(6)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='pinar' variant="h6" sx={{my: 2}}>
                            تماس با ما
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
                                    borderLeft: '0.4rem solid #601FEB'
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
                                    <Menu/>
                                    {/*responsive logo*/}
                                    <img className='mr-1' src="/images/head-logo.svg" width={40} height={30} alt=""/>
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
                                        <MusicNoteOutlined/>
                                       صفحه اصلی
                                    </Link>
                                    <Link title='خرید آنلاین بلیت همایش' to={'/conference/'} onClick={() => {

                                        handleActivePage(2)
                                    }
                                    }
                                          className={`navbar-item  underline ${activePage === 2 && 'navactive'}`}>
                                        <EventSeatOutlined/>
                                        بلیت همایش
                                    </Link>
                                    <Link title='خرید آنلاین بلیت تئاتر' to={'/theatre/'} onClick={() => {

                                        handleActivePage(3)
                                    }
                                    }
                                          className={`navbar-item  underline ${activePage === 3 && 'navactive'}`}>
                                        <TheaterComedyOutlined/>
                                        بلیت تئاتر
                                    </Link>


                                    <Link title='آرشیو ویدئویی برنامه های سایت بیلیتیم
                                    ' to={'/live/'} onClick={() => {

                                        handleActivePage(4)
                                    }}
                                          className={`navbar-item  underline ${activePage === 4 && 'navactive'}`}>
                                        <ArchiveOutlined/>
                                        آرشیو ویدیویی
                                    </Link>


                                    <Link title='پیگیری خرید بلیط با کد رهگیری' to={'/register/'} onClick={() => {

                                        handleActivePage(5)
                                    }}
                                          className={`navbar-item  underline ${activePage === 5 && 'navactive'}`}>
                                        <ManageSearchOutlined/>
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