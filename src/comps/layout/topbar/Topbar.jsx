import * as React from 'react'
import { AppBar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HomeIcon from '@mui/icons-material/Home';
import {Link, useNavigate} from 'react-router-dom'
import app from '../../fb/fb'
import { getAuth,signOut } from 'firebase/auth'


const Topbar = ({drawerWidth, toggleMenu, setToggleMenu, user}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const fb = app
    const auth = getAuth(fb)


    const handleClose = (action) => {
        setAnchorEl(null)
        if (action === 'out') {
            signOut(auth)
            navigate('/')
        }
    }

    return(
        <AppBar position="fixed" 
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#ebebeb',
                    color: 'black'
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
                <IconButton 
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    onClick={() => navigate('/')}
                    sx={{ mr: 2 }}
                >
                    <HomeIcon />
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
                        { !user ? 
                            <div>
                                <MenuItem component={Link} to='auth/SignIn' onClick={(e) => handleClose('in')}>SignIn</MenuItem>
                                <MenuItem component={Link} to='auth/SignUp' onClick={(e) => handleClose('up')}>SignUp</MenuItem>
                            </div>
                            :
                            <div>
                                <MenuItem onClick={(e) => handleClose('out')}>SignOut</MenuItem>
                                <MenuItem component={Link} to='auth/MyAccount' onClick={(e) => handleClose('account')}>MyAccount</MenuItem>  
                            </div>
                        }
                </Menu>
                <Typography variant="caption">{user ? user.email : ''}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar