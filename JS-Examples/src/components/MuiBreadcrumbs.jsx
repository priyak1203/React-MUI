import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadcrumbs = () => {
  return (
    <Stack spacing={2}>
      {/* Basic Breadcrumb */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Breadcrumb
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>

      {/*  Breadcrumb with custom seperator */}
      <Box>
        <Typography variant="h6" color="secondary">
          Breadcrumb with custom seperator
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" separator="--">
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>

      {/*   Breadcrumb with icon as seperator */}
      <Box>
        <Typography variant="h6" color="secondary">
          Breadcrumb with icon as seperator
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>

      {/*  Collapsed Breadcrumbs */}
      <Box>
        <Typography variant="h6" color="secondary">
          Collapsed Breadcrumbs
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Store
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Products
          </Link>

          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>

      {/* Collapsed Breadcrumbs - fixed numbers after collapse */}
      <Box>
        <Typography variant="h6" color="secondary">
          Collapsed Breadcrumbs - fixed numbers after collapse
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={2}
          itemsAfterCollapse={2}
        >
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Store
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Products
          </Link>

          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>

      {/* Collapsed Breadcrumbs - fixed numbers before collapse */}
      <Box>
        <Typography variant="h6" color="secondary">
          Collapsed Breadcrumbs - fixed numbers before collapse
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={2}
          itemsBeforeCollapse={2}
        >
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Store
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Products
          </Link>

          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  );
};

export default MuiBreadcrumbs;
