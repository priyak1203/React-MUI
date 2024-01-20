import { Box, Stack, Typography } from '@mui/material';

const MuiResponsiveness = () => {
  return (
    <Stack spacing={2}>
      {/* Unresponsive Box */}
      <Box>
        <Typography variant="h6" color="secondary" gutterBottom>
          Unresponsive Box
        </Typography>
        <Box
          sx={{
            height: '300px',
            width: '300px',
            bgcolor: 'primary.main',
          }}
        ></Box>
      </Box>

      {/* Responsive Box */}
      <Box>
        <Typography variant="h6" color="secondary" gutterBottom>
          Responsive Box
        </Typography>
        <Box
          sx={{
            height: '300px',
            width: {
              xs: 100, // 0
              sm: 200, // 600
              md: 300, // 900
              lg: 400, // 1200
              xl: 500, // 1536
            },
            bgcolor: 'primary.main',
          }}
        ></Box>
      </Box>
    </Stack>
  );
};
export default MuiResponsiveness;
