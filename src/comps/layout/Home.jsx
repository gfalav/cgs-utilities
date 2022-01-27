import { Grid, Typography } from '@mui/material'
import bg from '../../images/bg.png'

const Home = () => {

    return(
        
       <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{m: 2, fontWeight: "bold"}}>
                    CGS Utilities
                </Typography>
                <Typography variant="h4" sx={{m: 2}}>
                    Atención de Clientes, Facturación y Cobranza, Medición y Gestión de Servicios, todo en una sola aplicación.
                </Typography>
                <Typography variant="h6" sx={{m: 2}}>
                        Conecte la atención al cliente, la facturación y la medición avanzada para brindar un servicio eficaz que satisfaga a los clientes y genere confianza. Cree una vista única de los datos del medidor y del dispositivo, implemente fácilmente planes de calificación complejos y ofrezca un autoservicio intuitivo a través de canales digitales.
                </Typography>
           </Grid>
           <Grid item xs={12} md={6}>
                <img src={bg} alt='Home Img' width="100%"/>
           </Grid>
       </Grid>
    )
}

export default Home