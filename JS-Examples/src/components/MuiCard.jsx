import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';

const MuiCard = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Card with Actions */}
      <Box>
        <Typography variant="h6" color="primary">
          Basic Card with Actions
        </Typography>
        <Box width="300px">
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React is a JavaScript library for building user interfaces.
                React can be used as a base in the developement of single-page
                or mobile applications
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">share</Button>
              <Button size="small">learn more</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>

      {/* Card with Image*/}
      <Box>
        <Typography variant="h6" color="primary">
          Card with Image
        </Typography>
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              image="https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg"
              height="194"
              alt="istanbul"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Istanbul
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Istanbul is the largest city in Turkey, serving as the country's
                economic, cultural and historic hub.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">share</Button>
              <Button size="small">learn more</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Stack>
  );
};

export default MuiCard;
