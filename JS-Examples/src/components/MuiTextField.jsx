import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

const MuiTextField = () => {
  const [email, setEmail] = useState('');

  return (
    <Stack spacing={4}>
      {/* Textfields with variants */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfields with variants
        </Typography>
        <TextField variant="outlined" label="Name" />
        <TextField variant="filled" label="Name" />
        <TextField variant="standard" label="Name" />
      </Stack>
      {/* Textfields with different size and colors */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfields with different size and colors
        </Typography>
        <TextField
          variant="outlined"
          label="Small Secondary"
          size="small"
          color="secondary"
        />
        <TextField
          variant="filled"
          label="Large Success"
          size="large"
          color="success"
        />
      </Stack>

      {/* Textfield with required prop */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with required prop
        </Typography>
        <TextField variant="outlined" label="Form Input" required />
      </Stack>

      {/* Textfield with helper text */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with helper text
        </Typography>
        <TextField
          variant="outlined"
          label="Password"
          helperText="Do not share your password"
        />
      </Stack>

      {/* Textfield with type password */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with type password
        </Typography>
        <TextField
          variant="outlined"
          label="Password"
          required
          type="password"
        />
      </Stack>

      {/*  Textfield with disabled and read-only */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with disabled and read-only
        </Typography>
        <TextField variant="outlined" label="Disabled" disabled />
        <TextField
          variant="outlined"
          label="Read only"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      {/*  Textfield with label shrunk*/}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with label shrunk
        </Typography>
        <TextField
          variant="outlined"
          label="Username"
          InputLabelProps={{ shrink: true }}
        />
      </Stack>

      {/*  Textfield with prefix and suffixes - input adornments */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with prefix and suffixes - Input Adornments
        </Typography>
        <TextField
          variant="outlined"
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          variant="outlined"
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/*  Textfield with error prop*/}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Textfield with error prop
        </Typography>
        <TextField
          variant="outlined"
          label="Email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!email}
          helperText={!email ? 'Required' : 'Enter valid email'}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
