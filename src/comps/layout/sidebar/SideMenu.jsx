import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, CssBaseline, MenuItem, ThemeProvider } from '@mui/material'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import RuleFolderIcon from '@mui/icons-material/RuleFolder'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import RouteIcon from '@mui/icons-material/Route'
import DateRangeIcon from '@mui/icons-material/DateRange';
import theme from '../Theme'

export default function SideMenu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ mt: 3}}>
      <CssBaseline />
      <Typography variant='caption' sx={{pl: 4}}>
        Altas y Reclamos
      </Typography>
      <Accordion expanded={expanded === 'Expedientes'} onChange={handleChange('Expedientes')} sx={{mb: 2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: '#b8b8b8'}}
        >
          <CreateNewFolderIcon />
          <Typography sx={{pl: 1}}>Expedientes</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: '#b8b8b8', overflow: 'hidden'}}>
          <MenuItem><DriveFolderUploadIcon sx={{pr: 1}}/>Alta de Expediente</MenuItem>
          <MenuItem><FindInPageIcon sx={{pr: 1}}/>Seguimiento</MenuItem>
          <MenuItem><RuleFolderIcon sx={{pr: 1}}/>Informes</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Typography variant='caption' sx={{pl: 4, pt: '20px', mt: 3}}>
        Ciclo Comercial
      </Typography>
      <Accordion expanded={expanded === 'Lecturas'} onChange={handleChange('Lecturas')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: '#b8b8b8'}}
        >
          <ChromeReaderModeIcon />
          <Typography sx={{pl: 1}}>Lecturas</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: '#b8b8b8', overflow: 'hidden'}}>
          <MenuItem><DirectionsRunIcon sx={{pr: 1}}/>Lecturistas</MenuItem>
          <MenuItem><RouteIcon sx={{pr: 1}}/>Rutas e Itinerarios</MenuItem>
          <MenuItem><DateRangeIcon sx={{pr: 1}}/>Calendario</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'Facturacion'} onChange={handleChange('Facturacion')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: '#b8b8b8'}}
        >
          <CreateNewFolderIcon />
          <Typography sx={{pl: 1}}>Facturación</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: '#b8b8b8', overflow: 'hidden'}}>
          <MenuItem><DriveFolderUploadIcon sx={{pr: 1}}/>Anomalías</MenuItem>
          <MenuItem><FindInPageIcon sx={{pr: 1}}/>Cuadro Tarifario</MenuItem>
          <MenuItem><RuleFolderIcon sx={{pr: 1}}/>Parametrización</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'Cobranza'} onChange={handleChange('Cobranza')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: '#b8b8b8'}}
        >
          <CreateNewFolderIcon />
          <Typography sx={{pl: 1}}>Cobranza</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: '#b8b8b8', overflow: 'hidden'}}>
          <MenuItem><DriveFolderUploadIcon sx={{pr: 1}}/>Parametrización</MenuItem>
          <MenuItem><FindInPageIcon sx={{pr: 1}}/>Cobranza</MenuItem>
          <MenuItem><RuleFolderIcon sx={{pr: 1}}/>Cobros Erróneos</MenuItem>
        </AccordionDetails>
      </Accordion>
    </Box>
    </ThemeProvider>
  );
}
