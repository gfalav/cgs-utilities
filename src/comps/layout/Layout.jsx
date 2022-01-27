import React from 'react'
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material"
import SideMenu from './sidebar/SideMenu'
import LogoMark from './sidebar/LogoMark'
import Topbar from './topbar/Topbar'
import { Outlet } from 'react-router-dom'

const Layout = (props) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const drawerWidth = props.drawerWidth
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const user = props.user

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
        <Box sx={{display: 'block'}}>
            <Topbar drawerWidth={drawerWidth} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} user={user}/>
            <Box sx={{  width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        mt: { xs: '76px', sm: '80px' }
                    }}>
                <Outlet />
            </Box>
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