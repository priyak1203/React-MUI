import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiLists = () => {
  return (
    <Grid container spacing={2}>
      {/* Basic List */}
      <Grid item xs={4}>
        <Typography variant="h6" color="secondary">
          Basic List
        </Typography>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
          <List>
            <ListItem>
              <ListItemText primary="List Item 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="List Item 2" />
            </ListItem>
            <ListItem>
              <ListItemText primary="List Item 3" />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* List with Icons*/}
      <Grid item xs={4}>
        <Typography variant="h6" color="secondary">
          List with Icons
        </Typography>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List Item 1" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List Item 2" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List Item 3" />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* List with Avatar*/}
      <Grid item xs={4}>
        <Typography variant="h6" color="secondary">
          List with Avatar
        </Typography>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="List Item 1" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="List Item 2" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary="List Item 3" />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/*  List with Secondary Text */}
      <Grid item xs={4}>
        <Typography variant="h6" color="secondary">
          List with Secondary Text
        </Typography>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="List Item 1"
                secondary="secondary text 1"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="List Item 2"
                secondary="secondary text 2"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="List Item 3"
                secondary="secondary text 3"
              />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* List with Buttons */}
      <Grid item xs={4}>
        <Typography variant="h6" color="secondary">
          List with Buttons
        </Typography>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List Item 1" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List Item 2" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List Item 3" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* List with Divider */}
      <Grid item xs={4}>
        <Typography variant="h6" color="secondary">
          List with Divider
        </Typography>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List Item 1" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List Item 2" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List Item 3" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiLists;
