import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiTooltip = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Tooltip */}
      <Box>
        <Typography variant="h6" color="primary">
          Basic Tooltip
        </Typography>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Tooltip with different placement */}
      <Box>
        <Typography variant="h6" color="primary">
          Tooltip with different placement
        </Typography>
        <Tooltip title="Delete" placement="right">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/*  Tooltip with arrow prop */}
      <Box>
        <Typography variant="h6" color="primary">
          Tooltip with arrow prop
        </Typography>
        <Tooltip title="Delete" placement="right" arrow>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/*   Tooltip with enter delay and leave delay */}
      <Box>
        <Typography variant="h6" color="primary">
          Tooltip with enter delay and leave delay
        </Typography>
        <Tooltip
          title="Delete"
          placement="right"
          arrow
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
};

export default MuiTooltip;
