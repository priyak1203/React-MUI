import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack spacing={2}>
      {/* Basic Accordion */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Accordion
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel1-header"
            aria-controls="panel1-content"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Accordion Group */}
      <Box>
        <Typography variant="h6" color="secondary">
          Accordion Group
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel1-header"
            aria-controls="panel1-content"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel2-header"
            aria-controls="panel2-content"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel3-header"
            aria-controls="panel3-content"
          >
            Accordion 3
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Controlled Accordion */}
      <Box>
        <Typography variant="h6" color="secondary">
          Controlled Accordion
        </Typography>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel1-header"
            aria-controls="panel1-content"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel2-header"
            aria-controls="panel2-content"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel3-header"
            aria-controls="panel3-content"
          >
            Accordion 3
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis, deleniti!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
};

export default MuiAccordion;
