import styled from '@emotion/styled';
import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  colors,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#d50000',
  },
  palette: {
    secondary: {
      main: colors.teal[500],
    },
    greyier: {
      main: colors.grey[500],
      darker: colors.grey[800],
    },
  },
});

const StyledBox1 = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.status.danger,
}));

const StyledBox2 = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.greyier.main,
}));

const StyledBox3 = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.greyier.darker,
}));

const MuiCustomTheme = () => {
  return (
    <>
      <Stack sx={{ marginBottom: '10px' }}>
        {/*Default Theme */}
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>
            Default Theme
          </Typography>
          <Box
            sx={{
              height: '300px',
              width: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500,
              },
              bgcolor: 'secondary.main',
            }}
          ></Box>
        </Box>
      </Stack>
      {/* Custom Themes  */}
      <ThemeProvider theme={theme}>
        <Stack spacing={2} direction={'row'}>
          {/* Custom Theme */}
          <Box>
            <Typography variant="h6" color="secondary.dark" gutterBottom>
              Custom Theme
            </Typography>
            <Box
              sx={{
                height: '300px',
                width: {
                  xs: 100,
                  sm: 200,
                  md: 300,
                  lg: 400,
                  xl: 500,
                },
                bgcolor: 'secondary.main',
              }}
            ></Box>
          </Box>
          <Box>
            <Typography variant="h6" color="secondary.light" gutterBottom>
              Styled Box
            </Typography>
            <StyledBox1></StyledBox1>
          </Box>
          <Box>
            <Typography variant="h6" color="secondary.light" gutterBottom>
              Grey Styled Box
            </Typography>
            <StyledBox2></StyledBox2>
          </Box>
          <Box>
            <Typography variant="h6" color="secondary.light" gutterBottom>
              Darker Grey Styled Box
            </Typography>
            <StyledBox3></StyledBox3>
          </Box>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default MuiCustomTheme;
