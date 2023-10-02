import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MuiCheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [skills, setSkills] = useState([]);
  const [toppings, setToppings] = useState({
    olives: false,
    peppers: false,
    jalapenos: false,
    tomatoes: false,
  });
  const { olives, peppers, jalapenos, tomatoes } = toppings;

  console.log({ acceptTnc, bookmark, skills, toppings });

  const handleChange = (e) => {
    setAcceptTnc(e.target.checked);
  };

  const handleBookmark = (e) => {
    setBookmark(e.target.checked);
  };

  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  const handleToppingsChange = (e) => {
    setToppings({ ...toppings, [e.target.name]: e.target.checked });
  };

  const error =
    [olives, peppers, jalapenos, tomatoes].filter((t) => t).length < 2;
  console.log(error);
  return (
    <Stack spacing={2}>
      {/* CheckBox Basic */}
      <Box>
        <Typography variant="h6" color="primary">
          CheckBox Basic
        </Typography>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>

      {/* CheckBox with different size and color */}
      <Box>
        <Typography variant="h6" color="primary">
          CheckBox with different size and color
        </Typography>
        <FormControlLabel
          label="Terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnc}
              onChange={handleChange}
            />
          }
        />
      </Box>

      {/* CheckBox with icon */}
      <Box>
        <Typography variant="h6" color="primary">
          CheckBox with icon
        </Typography>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={bookmark}
          onChange={handleBookmark}
        />
      </Box>

      {/* CheckBox Group */}
      <Box>
        <Typography variant="h6" color="primary">
          CheckBox Group
        </Typography>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  checked={skills.includes('html')}
                  onChange={handleSkillsChange}
                />
              }
              value="html"
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  checked={skills.includes('css')}
                  onChange={handleSkillsChange}
                />
              }
              value="css"
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Checkbox
                  checked={skills.includes('javascript')}
                  onChange={handleSkillsChange}
                />
              }
              value="javascript"
            />
          </FormGroup>
        </FormControl>
      </Box>

      {/* CheckBox Group as Row */}
      <Box>
        <Typography variant="h6" color="primary">
          CheckBox Group as Row
        </Typography>
        <FormControl error={error}>
          <FormLabel>Select Toppings</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Olives"
              control={
                <Checkbox
                  checked={olives}
                  onChange={handleToppingsChange}
                  name="olives"
                />
              }
            />
            <FormControlLabel
              label="Peppers"
              control={
                <Checkbox
                  checked={peppers}
                  onChange={handleToppingsChange}
                  name="peppers"
                />
              }
            />
            <FormControlLabel
              label="Jalapenos"
              control={
                <Checkbox
                  checked={jalapenos}
                  onChange={handleToppingsChange}
                  name="jalapenos"
                />
              }
            />
            <FormControlLabel
              label="SunDried Tomatoes"
              control={
                <Checkbox
                  checked={tomatoes}
                  onChange={handleToppingsChange}
                  name="tomatoes"
                />
              }
            />
          </FormGroup>
          <FormHelperText>
            {error ? 'Select atleast two' : 'Selected two or more'}
          </FormHelperText>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default MuiCheckBox;
