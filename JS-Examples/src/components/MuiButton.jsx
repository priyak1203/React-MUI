import { Button, IconButton, Stack, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LightModeIcon from '@mui/icons-material/LightMode';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      {/* Buttons with different styles */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Buttons with different styles
        </Typography>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      {/* Buttons as anchor element / link */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Buttons as anchor element / link
        </Typography>
        <Button
          variant="text"
          href="https://projectsgallery.netlify.app/"
          target="_blank"
        >
          Check Projects
        </Button>
      </Stack>
      {/* Buttons with different colors and styles */}
      <Stack spacing={2}>
        <Typography variant="h6" color="secondary">
          Buttons with different colors and styles
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="text" color="primary">
            primary
          </Button>
          <Button variant="text" color="secondary">
            secondary
          </Button>
          <Button variant="text" color="error">
            error
          </Button>
          <Button variant="text" color="info">
            info
          </Button>
          <Button variant="text" color="warning">
            warning
          </Button>
          <Button variant="text" color="success">
            success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="primary">
            primary
          </Button>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="outlined" color="error">
            error
          </Button>
          <Button variant="outlined" color="info">
            info
          </Button>
          <Button variant="outlined" color="warning">
            warning
          </Button>
          <Button variant="outlined" color="success">
            success
          </Button>
        </Stack>
      </Stack>
      {/* Buttons with different sizes */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Buttons with different sizes
        </Typography>
        <Stack spacing={2} direction="row" display="block">
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
      </Stack>
      {/* Buttons with icons inside */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Buttons with icons inside
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            send
          </Button>
        </Stack>
      </Stack>
      {/* Buttons with only icons */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Buttons with only icons
        </Typography>
        <Stack spacing={2} direction="row">
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="theme" color="secondary" size="large">
            <LightModeIcon />
          </IconButton>
        </Stack>
      </Stack>
      {/* Button with elevation disabled */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Button with elevation disabled
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained">elevated</Button>
          <Button variant="contained" disableElevation>
            no elevation
          </Button>
        </Stack>
      </Stack>

      {/* Button with ripple disabled */}
      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Button with ripple disabled
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained">ripple</Button>
          <Button variant="contained" disableRipple>
            no ripple
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Typography variant="h6" color="secondary">
          Button with alert on click
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => alert('clicked')}>
            Alert
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
