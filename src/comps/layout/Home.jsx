import { Badge, Box, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import bg from '../../images/bg.png'

const Home = () => {

    return(
        <>
        <IconButton>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
        </IconButton>
        <Box>
            <img src={bg} alt='Home Img' width="100%"/>
        </Box>
        </>
    )
}

export default Home