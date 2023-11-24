import { Box, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const MuiLoading = () => {
  return (
    <Stack spacing={4}>
      {/* Basic Loading */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Loading
        </Typography>
        <Stack direction="row" spacing={4}>
          <LoadingButton variant="outlined">Submit</LoadingButton>
          <LoadingButton variant="outlined" loading>
            Submit
          </LoadingButton>
        </Stack>
      </Box>

      {/* Loading with text */}
      <Box>
        <Typography variant="h6" color="secondary">
          Loading with text
        </Typography>
        <Stack direction="row" spacing={4}>
          <LoadingButton variant="outlined" loadingIndicator="loading...">
            Fetch Data
          </LoadingButton>
          <LoadingButton
            variant="outlined"
            loading
            loadingIndicator="loading..."
          >
            Fetch Data
          </LoadingButton>
        </Stack>
      </Box>

      {/*  Loading buttons with Icons */}
      <Box>
        <Typography variant="h6" color="secondary">
          Loading buttons with Icons
        </Typography>
        <Stack direction="row" spacing={4}>
          <LoadingButton
            variant="outlined"
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Save
          </LoadingButton>
          <LoadingButton
            variant="outlined"
            loadingPosition="start"
            startIcon={<SaveIcon />}
            loading
          >
            Save
          </LoadingButton>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MuiLoading;
