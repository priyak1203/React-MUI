import { Masonry } from '@mui/lab';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const MuiMasonry = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Masonry */}
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Typography variant="h6" gutterBottom color="secondary">
          Basic Masonry
        </Typography>
        <Masonry columns={4} spacing={2}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ccc',
                color: 'text.secondary',
              }}
            >
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Box>

      {/* Masonry with Accordion */}
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Typography variant="h6" gutterBottom color="secondary">
          Masonry with Accordion
        </Typography>
        <Masonry columns={4} spacing={2}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                border: '1px solid #ccc',
              }}
            >
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Contents</AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
};
export default MuiMasonry;
