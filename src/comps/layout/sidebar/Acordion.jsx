import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem } from '@mui/material';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{bgcolor: '#233044', color: 'white'}}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: '#233044', color: 'white'}}>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
          <MenuItem>Opción 4</MenuItem>
          <MenuItem>Opción 5</MenuItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
