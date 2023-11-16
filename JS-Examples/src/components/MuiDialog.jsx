import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <Stack spacing={4}>
      {/* Basic Dialog */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Dialog
        </Typography>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          open={open}
          onClose={handleClose}
        >
          <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Are you sure you want to submit the test? You will not be able to
              edit after submitting
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button autoFocus onClick={handleClose}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* Form Dialog */}
      <Box>
        <Typography variant="h6" color="secondary">
          Form Dialog
        </Typography>
        <Button onClick={() => setFormOpen(true)}>Open Form Dialog</Button>
        <Dialog
          aria-labelledby="form-dialog-title"
          aria-describedby="form-dialog-description"
          open={formOpen}
          onClose={handleFormClose}
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText id="form-dialog-description">
              To subscribe to this website, please enter your email address
              here. We will send updates occassionally
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFormClose}>Cancel</Button>
            <Button onClick={handleFormClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Stack>
  );
};

export default MuiDialog;
