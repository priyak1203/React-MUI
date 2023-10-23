import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const MuiNavbar = () => {
  return (
    <Stack spacing={4}>
      {/* Basic Navbar */}
      <Box>
        <Typography variant="h6" color="primary">
          Basic Navbar
        </Typography>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              POKEMONAPP
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Navbar with Menu */}
      <Box>
        <Typography variant="h6" color="primary">
          Navbar with Menu
        </Typography>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
};

export default MuiNavbar;
