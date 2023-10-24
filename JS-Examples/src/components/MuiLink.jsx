import { Box, Link, Stack, Typography } from '@mui/material';

const MuiLink = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Link */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Link
        </Typography>
        <Link href="https://projectsgallery.netlify.app/">Primary Link</Link>
      </Box>

      {/* Link with different color */}
      <Box>
        <Typography variant="h6" color="primary">
          Link with different color
        </Typography>
        <Link href="#" color="secondary">
          Secondary
        </Link>
      </Box>

      {/* Link underline on hover */}
      <Box>
        <Typography variant="h6" color="primary">
          Link underline on hover
        </Typography>
        <Link href="#" color="secondary" underline="hover">
          Hover-Underline
        </Link>
      </Box>

      {/*   Link with variant inherit by default */}
      <Box>
        <Typography variant="h6" color="primary">
          Link with variant inherit by default
        </Typography>
        <Typography variant="h6">
          <Link href="#" color="secondary">
            variant-inherit
          </Link>
        </Typography>
      </Box>

      {/*   Link with variant  */}
      <Box>
        <Typography variant="h6" color="primary">
          Link with variant
        </Typography>
        <Link href="#" color="secondary" variant="body2">
          variant-inherit
        </Link>
      </Box>
    </Stack>
  );
};

export default MuiLink;
