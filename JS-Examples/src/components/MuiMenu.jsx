import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [navAnchorEl, setNavAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const openNav = Boolean(navAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickNav = (event) => {
    setNavAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNav = () => {
    setNavAnchorEl(null);
  };

  return (
    <Stack spacing={4}>
      {/* Basic Menu */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Menu
        </Typography>
        <Button
          id="resouces-button"
          onClick={handleClick}
          aria-controls={open ? 'resources-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          Resources
        </Button>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'resources-button' }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Box>

      {/* Menu as part of a Navbar */}
      <Box>
        <Typography variant="h6" color="secondary">
          Menu as part of a Navbar
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
              <Button
                color="inherit"
                id="resouces-navbutton"
                onClick={handleClickNav}
                aria-controls={openNav ? 'resources-navmenu' : undefined}
                aria-haspopup="true"
                aria-expanded={openNav ? 'true' : undefined}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Resources
              </Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
            <Menu
              id="resources-navmenu"
              anchorEl={navAnchorEl}
              open={openNav}
              onClose={handleCloseNav}
              MenuListProps={{ 'aria-labelledby': 'resources-navbutton' }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleCloseNav}>Blog</MenuItem>
              <MenuItem onClick={handleCloseNav}>Profile</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
};

export default MuiMenu;
