import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, useMediaQuery } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import SideMenu from './sidebar/SideMenu';
import LogoMark from './sidebar/LogoMark';

const Layout = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const drawerWidth = 300
    const [toggleMenu, setToggleMenu] = React.useState(false)

    const DrawerIn = () => {

        return(
            <Box sx={{width: drawerWidth}}>
                <LogoMark />
                <Divider />
                <SideMenu />
            </Box>
        )
    }

    return(
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" 
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                      }}
            >
                <Toolbar>
                    <IconButton 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setToggleMenu(!toggleMenu)}
                        sx={{ mr: 2, display: {sm: 'none'} }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            { !isMobile && <Drawer 
                                variant='persistent'
                                anchor="left"
                                open
                                sx={{
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                                                            width: drawerWidth, 
                                                            backgroundColor: '#233044',
                                                            color: '#b8b8b8' 
                                                        },
                                  }}
                            >
                                <DrawerIn />   
                            </Drawer>
            }
             { isMobile && <Drawer 
                                variant='temporary'
                                anchor="left"
                                open={toggleMenu}
                                onClose={() => setToggleMenu(false)}
                                sx={{
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                                                            width: drawerWidth, 
                                                            backgroundColor: '#233044',
                                                            color: '#b8b8b8' 
                                                        },
                                  }}
                            >
                                <DrawerIn />   
                            </Drawer>
            }

        </Box>
    )
}

export default Layout