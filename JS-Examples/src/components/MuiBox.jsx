import { Box, Stack, Typography } from '@mui/material';

const MuiBox = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Box Component */}
      <Stack>
        <Typography variant="h6" color="secondary">
          Basic Box Component
        </Typography>
        <Box>CodeEvolution</Box>
      </Stack>

      {/* Box Component as section*/}
      <Stack>
        <Typography variant="h6" color="secondary">
          Box Component as section
        </Typography>
        <Box component="section">Box as Section</Box>
      </Stack>

      {/* Box with styles*/}
      <Stack>
        <Typography variant="h6" color="secondary">
          Box with styles
        </Typography>
        <Box
          component="span"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: '100px',
            height: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          Box with styles
        </Box>
      </Stack>

      {/*  Box with Mui System Properties*/}
      <Stack>
        <Typography variant="h6" color="secondary">
          Box with Mui System Properties
        </Typography>
        <Box
          display="flex"
          width="100px"
          height="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default MuiBox;
