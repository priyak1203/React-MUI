import { Box, Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
  const [basicRating, setBasicRating] = useState(null);
  const [precisionRating, setPrecisionRating] = useState(null);
  const [iconRating, setIconRating] = useState(null);

  console.log({ basicRating, precisionRating, iconRating });

  const handleBasicRating = (e, value) => {
    setBasicRating(value);
  };

  const handlePrecisionRating = (e, value) => {
    setPrecisionRating(value);
  };

  const handleIconRating = (e, value) => {
    setIconRating(value);
  };

  return (
    <Stack spacing={2}>
      {/* Rating Basic */}
      <Box>
        <Typography variant="h6" color="primary">
          Rating Basic
        </Typography>
        <Rating value={basicRating} onChange={handleBasicRating} />
      </Box>

      {/* Rating with precision */}
      <Box>
        <Typography variant="h6" color="primary">
          Rating with precision
        </Typography>
        <Rating
          value={precisionRating}
          onChange={handlePrecisionRating}
          precision={0.5}
          size="large"
        />
      </Box>

      {/*  Rating with Icon */}
      <Box>
        <Typography variant="h6" color="primary">
          Rating with Icon
        </Typography>
        <Rating
          value={iconRating}
          onChange={handleIconRating}
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>

      {/* Rating ReadOnly */}
      <Box>
        <Typography variant="h6" color="primary">
          Rating ReadOnly
        </Typography>
        <Rating value={4} readOnly />
      </Box>
    </Stack>
  );
};

export default MuiRating;
