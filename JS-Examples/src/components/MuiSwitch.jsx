import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const MuiSwitch = () => {
  const [theme, setTheme] = useState(false);
  const [schedule, setSchedule] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
  });
  console.log({ theme, schedule });

  const { mon, tue, wed, thu, fri } = schedule;

  const handleTheme = (e) => {
    setTheme(e.target.checked);
  };

  const handleScheduleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.checked });
  };

  return (
    <Stack spacing={2}>
      {/* Switch Basic */}
      <Box>
        <Typography variant="h6" color="primary">
          Switch Basic
        </Typography>
        <FormControlLabel
          label={theme ? 'Dark Mode' : 'Light Mode'}
          control={<Switch checked={theme} onChange={handleTheme} />}
        />
      </Box>

      {/* Switch with different size and color */}
      <Box>
        <Typography variant="h6" color="primary">
          Switch with different size and color
        </Typography>
        <FormControlLabel
          label={theme ? 'Dark Mode' : 'Light Mode'}
          control={
            <Switch
              checked={theme}
              onChange={handleTheme}
              size="small"
              color="success"
            />
          }
        />
      </Box>

      {/* Switch Group */}
      <Box>
        <Typography variant="h6" color="primary">
          Switch Group
        </Typography>
        <FormControl>
          <FormLabel>Weekly Work Schedule</FormLabel>
          <FormGroup>
            <FormControlLabel
              label={`Monday - ${mon ? 'WFO' : 'WFH'}`}
              control={
                <Switch
                  checked={mon}
                  onChange={handleScheduleChange}
                  name="mon"
                />
              }
            />
            <FormControlLabel
              label={`Tuesday - ${tue ? 'WFO' : 'WFH'}`}
              control={
                <Switch
                  checked={tue}
                  onChange={handleScheduleChange}
                  name="tue"
                />
              }
            />
            <FormControlLabel
              label={`Wednesday - ${wed ? 'WFO' : 'WFH'}`}
              control={
                <Switch
                  checked={wed}
                  onChange={handleScheduleChange}
                  name="wed"
                />
              }
            />
            <FormControlLabel
              label={`Thursday - ${thu ? 'WFO' : 'WFH'}`}
              control={
                <Switch
                  checked={thu}
                  onChange={handleScheduleChange}
                  name="thu"
                />
              }
            />
            <FormControlLabel
              label={`Friday - ${fri ? 'WFO' : 'WFH'}`}
              control={
                <Switch
                  checked={fri}
                  onChange={handleScheduleChange}
                  name="fri"
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default MuiSwitch;
