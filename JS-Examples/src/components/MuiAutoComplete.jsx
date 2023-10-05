import { Autocomplete, Box, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [freeValue, setFreeValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log({ value, freeValue, skill });

  return (
    <Stack width="350px" spacing={2}>
      {/* AutoComplete with fixed value */}
      <Box>
        <Typography variant="h6" color="primary" mb={2}>
          AutoComplete with fixed value
        </Typography>
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        />
      </Box>

      {/* AutoComplete with typing option */}
      <Box>
        <Typography variant="h6" color="primary" mb={2}>
          AutoComplete with typing option
        </Typography>
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={freeValue}
          onChange={(e, newValue) => setFreeValue(newValue)}
          freeSolo
        />
      </Box>

      {/* AutoComplete with object as value */}
      <Box>
        <Typography variant="h6" color="primary" mb={2}>
          AutoComplete with object as value
        </Typography>
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={skill}
          onChange={(e, newValue) => setSkill(newValue)}
        />
      </Box>
    </Stack>
  );
};

export default MuiAutoComplete;
