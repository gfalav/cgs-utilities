import * as React from 'react'
import { AppBar, Badge, Box, IconButton, Menu, MenuItem, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'


const Topbar = ({drawerWidth, toggleMenu, setToggleMenu}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }

    return(
        <AppBar position="fixed" 
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#ebebeb'                       
                  }}
        >
            <Toolbar>
                <IconButton 
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    onClick={() => setToggleMenu(!toggleMenu)}
                    sx={{ mr: 2, display: {sm: 'none'} }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{flexGrow: 1}} />
                <IconButton sx={{mr: 1}}>
                    <Badge badgeContent={10} color="secondary">
                        <NotificationsIcon color="primary" />
                    </Badge>
                </IconButton>
                <IconButton sx={{mr: 1}}>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon color="primary" />
                    </Badge>
                </IconButton>
                <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                  <AccountCircleIcon color="primary" fontSize='large' />
                </IconButton>
                <Menu 
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>SignIn</MenuItem>
                    <MenuItem onClick={handleClose}>SignUp</MenuItem>
                    <MenuItem onClick={handleClose}>SignOut</MenuItem>
                    <MenuItem onClick={handleClose}>MyAccount</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar