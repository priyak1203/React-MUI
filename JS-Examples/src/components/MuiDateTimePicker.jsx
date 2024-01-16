import { Stack, Typography } from '@mui/material';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { useState } from 'react';

const MuiDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  console.log({ selectedDate, selectedTime, selectedDateTime });
  console.log(dayjs(selectedDate).format('DD/MM/YYYY'));
  console.log(dayjs(selectedTime).format('h:m:s'));
  console.log(dayjs(selectedDateTime).format('DD-MMM-YYYY hh:mm:ss A'));
  const dateSelected = dayjs(selectedDate).format('DD/MM/YYYY');
  const timeSelected = dayjs(selectedTime).format('hh:mm:ss A');
  const dateTimeSelcted = dayjs(selectedDateTime).format(
    'DD-MMM-YYYY hh:mm:ss A'
  );

  return (
    <Stack spacing={4}>
      <Stack spacing={2} sx={{ width: '250px' }}>
        <DatePicker
          label="Date Picker"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
        <Typography>Date - {dateSelected}</Typography>
      </Stack>
      <Stack spacing={2} sx={{ width: '250px' }}>
        <TimePicker
          label="Time Picker"
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
        />
        <Typography>Time - {timeSelected}</Typography>
      </Stack>
      <Stack spacing={2} sx={{ width: '250px' }}>
        <DateTimePicker
          label="Date Time Picker"
          value={selectedDateTime}
          onChange={(newValue) => setSelectedDateTime(newValue)}
        />
        <Typography>Date Time -{dateTimeSelcted}</Typography>
      </Stack>
    </Stack>
  );
};

export default MuiDateTimePicker;
