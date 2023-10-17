import { Box, Grid, Stack, Typography } from '@mui/material';

const MuiGrid = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Grid */}
      <Box>
        <Typography variant="h6" color="primary">
          Basic Grid
        </Typography>
        <Grid container>
          <Grid item>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with 2 columns */}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with 2 columns
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with different column width */}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with different column width
        </Typography>
        <Grid container>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with different column width for different devices */}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with different column width for different devices
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="secondary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="secondary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="secondary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="secondary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with columns of equal width*/}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with columns of equal width
        </Typography>
        <Grid container>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with one column of different width*/}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with one column of different width
        </Typography>
        <Grid container>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with one column of auto width*/}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with one column of auto width
        </Typography>
        <Grid container>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs="auto">
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with equal spacing between row and columns */}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with equal spacing between row and columns
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid with different spacing between row and columns */}
      <Box>
        <Typography variant="h6" color="primary">
          Grid with different spacing between row and columns
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default MuiGrid;
