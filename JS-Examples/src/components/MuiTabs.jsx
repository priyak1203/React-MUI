import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MuiTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      {/* Basic Tabs */}
      <Box>
        <Typography variant="h6">Basic Tabs</Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Tab One" value="1" />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two</TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
        </TabContext>
      </Box>

      {/* Tabs with different colors and icon */}
      <Box>
        <Typography variant="h6">
          Tabs with different colors and icon
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab
                label="Tab One"
                value="1"
                icon={<FavoriteIcon />}
                iconPosition="start"
              />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" disabled />
            </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two</TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
        </TabContext>
      </Box>

      {/*   Scrollable Tabs */}
      <Box>
        <Typography variant="h6">Scrollable Tabs</Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Tab One" value="1" />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
              <Tab label="Tab Four" value="4" />
              <Tab label="Tab Five" value="5" />
              <Tab label="Tab Six" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two</TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
          <TabPanel value="4">Panel Four</TabPanel>
          <TabPanel value="5">Panel Five</TabPanel>
          <TabPanel value="6">Panel Six</TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
};
export default MuiTabs;
