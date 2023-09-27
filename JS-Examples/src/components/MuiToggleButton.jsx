import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

const MuiToggleButton = () => {
  const [formats, setFormats] = useState([]);
  const [singleFormat, setSingleFormat] = useState(null);
  console.log({ formats, singleFormat });

  const handleFormatChange = (event, updatedFormats) => {
    setFormats(updatedFormats);
  };

  const handleSingleFormatChange = (event, updatedFormat) => {
    setSingleFormat(updatedFormat);
  };

  return (
    <Stack spacing={4}>
      {/* Toggle buttons as a group */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Toggle buttons as a group
        </Typography>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* Toggle buttons variants */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Toggle buttons variants
        </Typography>
        <ToggleButtonGroup
          aria-label="text formatting"
          size="small"
          color="success"
          orientation="vertical"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* Toggle buttons single select */}
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">
          Toggle buttons single select
        </Typography>
        <ToggleButtonGroup
          aria-label="text formatting"
          size="large"
          color="secondary"
          exclusive
          value={singleFormat}
          onChange={handleSingleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiToggleButton;
