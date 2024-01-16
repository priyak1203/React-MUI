import { Stack, Typography } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';
import { useState } from 'react';

const MuiDateRangePicker = () => {
  const [value, setValue] = useState([null, null]);
  console.log({ value });

  const selectedValue = value.map((item) => dayjs(item).format('DD-MMM-YYYY'));
  console.log(selectedValue);

  return (
    <Stack sx={{ width: '400px' }} spacing={2}>
      <DateRangePicker
        localeText={{ start: 'Check-in', end: 'Check-out' }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      <Typography>
        {selectedValue[0]} to {selectedValue[1]}
      </Typography>
    </Stack>
  );
};
export default MuiDateRangePicker;
