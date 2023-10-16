import { Box, Divider, Stack, Typography } from '@mui/material';

const MuiStack = () => {
  return (
    <Stack spacing={2}>
      {/* Stack as Row */}
      <Stack>
        <Typography variant="h6" color="primary">
          Stack as Row
        </Typography>
        <Stack sx={{ border: '1px solid ' }} direction="row" spacing={2}>
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
          <Box
            display="flex"
            width="100px"
            height="100px"
            bgcolor="success.light"
            p={2}
          ></Box>
        </Stack>
      </Stack>

      {/* Stack as Column and Mui Properties */}
      <Stack>
        <Typography variant="h6" color="primary">
          Stack as Column and Mui Properties
        </Typography>
        <Stack border="1px solid red" p={2} direction="column" spacing={2}>
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
          <Box
            display="flex"
            width="100px"
            height="100px"
            bgcolor="success.light"
            p={2}
          ></Box>
        </Stack>
      </Stack>

      {/* Stack with Divider Component*/}
      <Stack>
        <Typography variant="h6" color="primary">
          Stack with Divider Component
        </Typography>
        <Stack
          sx={{ border: '1px solid ', borderColor: 'success.light' }}
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
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
          <Box
            display="flex"
            width="100px"
            height="100px"
            bgcolor="success.light"
            p={2}
          ></Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiStack;
