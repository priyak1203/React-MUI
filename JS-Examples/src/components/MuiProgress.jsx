import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

const MuiProgress = () => {
  return (
    <Stack spacing={4}>
      {/* Basic Circular Progress */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Circular Progress
        </Typography>
        <CircularProgress />
      </Box>

      {/*  Circular Progress with Different Colors */}
      <Box>
        <Typography variant="h6" color="secondary">
          Circular Progress with Different Colors
        </Typography>
        <CircularProgress color="success" sx={{ marginRight: 4 }} />
        <CircularProgress color="secondary" sx={{ marginRight: 4 }} />
        <CircularProgress color="warning" sx={{ marginRight: 4 }} />
      </Box>

      {/* Circular Progress Determinate */}
      <Box>
        <Typography variant="h6" color="secondary">
          Circular Progress Determinate
        </Typography>
        <CircularProgress
          color="success"
          sx={{ marginRight: 4 }}
          variant="determinate"
          value={25}
        />
        <CircularProgress
          color="secondary"
          sx={{ marginRight: 4 }}
          variant="determinate"
          value={60}
        />
        <CircularProgress
          color="warning"
          sx={{ marginRight: 4 }}
          variant="determinate"
          value={90}
        />
      </Box>

      {/*  Basic Linear Progress */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Linear Progress
        </Typography>
        <LinearProgress />
      </Box>

      {/* Linear Progress with Different Colors */}
      <Box>
        <Typography variant="h6" color="secondary">
          Linear Progress with Different Colors
        </Typography>
        <LinearProgress color="success" sx={{ marginBottom: 2 }} />
        <LinearProgress color="secondary" sx={{ marginBottom: 2 }} />
        <LinearProgress color="warning" sx={{ marginBottom: 2 }} />
      </Box>

      {/* Linear Progress Determinate */}
      <Box>
        <Typography variant="h6" color="secondary">
          Linear Progress Determinate
        </Typography>
        <LinearProgress
          color="success"
          sx={{ marginBottom: 2 }}
          variant="determinate"
          value={25}
        />
        <LinearProgress
          color="secondary"
          sx={{ marginBottom: 2 }}
          variant="determinate"
          value={60}
        />
        <LinearProgress
          color="warning"
          sx={{ marginBottom: 2 }}
          variant="determinate"
          value={90}
        />
      </Box>
    </Stack>
  );
};
export default MuiProgress;
