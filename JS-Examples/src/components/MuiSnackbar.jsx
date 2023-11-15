import { Alert, Box, Button, Snackbar, Stack, Typography } from '@mui/material';
import { forwardRef, useState } from 'react';

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);

  const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCustomClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCustomOpen(false);
  };

  return (
    <Stack spacing={2}>
      {/* Basic Snackbar */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Snackbar
        </Typography>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar
          message="Form submitted successfully"
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </Box>

      {/*    Custom Snackbar with Alert */}
      <Box>
        <Typography variant="h6" color="secondary">
          Custom Snackbar with Alert
        </Typography>
        <Button onClick={() => setCustomOpen(true)}>Submit</Button>
        <Snackbar
          open={customOpen}
          autoHideDuration={4000}
          onClose={handleCustomClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <SnackbarAlert onClose={handleCustomClose} severity="success">
            Form Submitted Successfully
          </SnackbarAlert>
        </Snackbar>
      </Box>
    </Stack>
  );
};

export default MuiSnackbar;
