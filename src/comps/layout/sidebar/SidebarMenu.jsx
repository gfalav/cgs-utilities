import { Grid, makeStyles, Stack, Typography } from "@mui/material"
import SimpleAccordion from "./Acordion"
import Logo from "./Logo"


const SidebarMenu = () => {

    return (
        <Stack className="mydiv">
            <Grid container>
                <Grid item xs={4}>
                    <Logo sx={{width: '40px', height: '40px'}}/> 
                </Grid>
                <Grid item xs={8}>
                    <Typography>The Swarm</Typography>
                </Grid>
            </Grid>
            <SimpleAccordion />

        </Stack>   
    )
}

export default SidebarMenu