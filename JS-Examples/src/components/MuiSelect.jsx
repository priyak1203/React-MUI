import { Box, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  console.log({ country });
  console.log({ countries });

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleMultipleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        {/* Select with single value */}
        <Box width={'250px'}>
          <Typography variant="h6" color="primary" gutterBottom>
            Select with single value
          </Typography>
          <TextField
            label="Select Country"
            select
            fullWidth
            value={country}
            onChange={handleChange}
          >
            <MenuItem value="IN">INDIA</MenuItem>
            <MenuItem value="GM">GERMANY</MenuItem>
            <MenuItem value="SW">SWITZERLAND</MenuItem>
          </TextField>
        </Box>

        {/* Select with multiple value */}
        <Box width={'250px'}>
          <Typography variant="h6" color="primary" gutterBottom>
            Select with multiple value
          </Typography>
          <TextField
            label="Select Country"
            select
            fullWidth
            value={countries}
            onChange={handleMultipleChange}
            SelectProps={{ multiple: true }}
          >
            <MenuItem value="IN">INDIA</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="SG">SINGAPORE</MenuItem>
            <MenuItem value="AU">AUSTRALIA</MenuItem>
          </TextField>
        </Box>
      </Stack>

      {/* Select with different size and color */}
      <Stack>
        <Typography variant="h6" color="secondary" gutterBottom>
          Select with different size and color
        </Typography>
        <Box width={'250px'}>
          <TextField
            label="Select Country"
            select
            fullWidth
            value={country}
            onChange={handleChange}
            size="small"
            color="secondary"
          >
            <MenuItem value="IN">INDIA</MenuItem>
            <MenuItem value="GM">GERMANY</MenuItem>
            <MenuItem value="SW">SWITZERLAND</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MuiSelect;
