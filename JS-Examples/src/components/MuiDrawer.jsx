import { Box, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box>
      <Typography variant="h6" color="secondary">
        Basic Drawer
      </Typography>
      <>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box width="250px" textAlign="center" p={2} role="presentation">
            <Typography variant="h6">Side Panel</Typography>
          </Box>
        </Drawer>
      </>
    </Box>
  );
};

export default MuiDrawer;
