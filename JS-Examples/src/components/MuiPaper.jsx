import { Box, Paper, Stack, Typography } from '@mui/material';

const MuiPaper = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Paper */}
      <Box>
        <Typography variant="h6" color="primary">
          Basic Paper
        </Typography>
        <Paper sx={{ padding: '16px', display: 'flex', gap: '8px' }}>
          <Box width="100px" height="100px" bgcolor="primary.light"></Box>
          <Box width="100px" height="100px" bgcolor="primary.light"></Box>
        </Paper>
      </Box>

      {/*  Paper with more elevation */}
      <Box>
        <Typography variant="h6" color="primary">
          Paper with more elevation
        </Typography>
        <Paper
          sx={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          elevation={4}
        >
          <Box width="100px" height="100px" bgcolor="primary.light"></Box>
          <Box width="100px" height="100px" bgcolor="primary.light"></Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default MuiPaper;
