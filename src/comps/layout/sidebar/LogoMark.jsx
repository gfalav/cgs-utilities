import { Grid, Typography } from "@mui/material"
import Logo from "./Logo"


const LogoMark = () => {


    return(
        <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{margin: '10px', height: '45px', backgroundColor: '#233044'}}>
            <Grid container item justifyContent='center' alignItems='center' xs={4} sx={{overflow: 'hidden' }}>
                <Logo />
            </Grid>
            <Grid container item justifyContent='flex-start' alignItems='center' xs={8} sx={{ }}>
                <Typography variant="h6" sx={{fontFamily: 'Open Sans Condensed'}}>The Honeycomb</Typography>
            </Grid>
        </Grid>
    )
}

export default LogoMark