import { Alert, AlertTitle, Button, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Alerts */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Basic Alerts
        </Typography>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is a success alert</Alert>
      </Stack>

      {/* Alert with Outlined Variant */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Alert with Outlined Variant
        </Typography>
        <Alert severity="error" variant="outlined">
          This is an error alert
        </Alert>
        <Alert severity="warning" variant="outlined">
          This is warning alert
        </Alert>
        <Alert severity="info" variant="outlined">
          This is an info alert
        </Alert>
        <Alert severity="success" variant="outlined">
          This is a success alert
        </Alert>
      </Stack>

      {/* Alert with Filled Variant */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Alert with Filled Variant
        </Typography>
        <Alert severity="error" variant="filled">
          This is an error alert
        </Alert>
        <Alert severity="warning" variant="filled">
          This is warning alert
        </Alert>
        <Alert severity="info" variant="filled">
          This is an info alert
        </Alert>
        <Alert severity="success" variant="filled">
          This is a success alert
        </Alert>
      </Stack>

      {/*  Alert with Titles */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Alert with Titles
        </Typography>
        <Alert severity="error" variant="outlined">
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert severity="warning" variant="outlined">
          <AlertTitle>Warning</AlertTitle>
          This is warning alert
        </Alert>
        <Alert severity="info" variant="outlined">
          <AlertTitle>Info</AlertTitle>
          This is an info alert
        </Alert>
        <Alert severity="success" variant="outlined">
          <AlertTitle>Success</AlertTitle>
          This is a success alert
        </Alert>
      </Stack>

      {/*   Alert with different icons */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Alert with different icons
        </Typography>
        <Alert
          severity="success"
          variant="outlined"
          icon={<CheckCircleIcon fontSize="inherit" />}
        >
          This is a success alert
        </Alert>
      </Stack>

      {/*    Alert with close  */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Alert with close
        </Typography>
        <Alert
          severity="error"
          variant="outlined"
          onClose={() => alert('Alert Closed')}
        >
          This is an error alert
        </Alert>
      </Stack>

      {/*   Alert with action */}
      <Stack spacing={2}>
        <Typography variant="h6" color="primary" mb={2}>
          Alert with action
        </Typography>
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
        >
          This is a success alert
        </Alert>
      </Stack>
    </Stack>
  );
};

export default MuiAlert;
