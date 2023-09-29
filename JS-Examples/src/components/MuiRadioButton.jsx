import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  const [gender, setGender] = useState('');

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Please select an option');

  console.log({ value, gender });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer');
      setError(true);
    }
    setAnswer(value);
  };

  return (
    <Stack spacing={4}>
      {/* Radio Group - Column */}
      <Box>
        <Typography variant="h6" color="primary" gutterBottom>
          Radio Group - Column
        </Typography>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            aria-labelledby="job-experience-group-label"
            name="job-experience-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Radio Group - Row */}
      <Box>
        <Typography variant="h6" color="secondary" gutterBottom>
          Radio Group - Row
        </Typography>
        <FormControl>
          <FormLabel id="gender-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="gender-group-label"
            name="gender-group"
            value={gender}
            onChange={handleGenderChange}
            row
          >
            <FormControlLabel control={<Radio />} label="Male" value="male" />
            <FormControlLabel
              control={<Radio color="secondary" />}
              label="Female"
              value="female"
            />
            <FormControlLabel
              control={<Radio size="small" />}
              label="Other"
              value="other"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Radio Group with helper text and error */}
      <Box>
        <Typography variant="h6" color="primary" gutterBottom>
          Radio Group with helper text and error
        </Typography>
        <FormControl error={error}>
          <FormLabel id="question-group-label">MUI is...</FormLabel>
          <RadioGroup
            aria-labelledby="question-group-label"
            name="gender-group"
            value={answer}
            onChange={handleAnswerChange}
            row
          >
            <FormControlLabel
              control={<Radio color="success" />}
              label="The Best"
              value="best"
            />
            <FormControlLabel
              control={<Radio color="error" />}
              label="The Worst"
              value="worst"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default MuiRadioButton;
