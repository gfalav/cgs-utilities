import { Grid, Typography } from "@mui/material"
import Logo from "./Logo"


const LogoMark = () => {


    return(
        <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{margin: '10px'}}>
                <Grid container item justifyContent='center' alignItems='center' xs={4} sx={{overflow: 'hidden' }}>
                    <Logo />
                </Grid>
                <Grid container item justifyContent='flexStart' alignItems='center' xs={8} sx={{pl: 1}}>
                    <Typography variant="h6">THE SWARM</Typography>
                </Grid>
            </Grid>
    )
}

export default LogoMark