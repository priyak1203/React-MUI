import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const MuilSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Stack spacing={2}>
      <Stack spacing={4} direction="row">
        {/* Basic Skeleton */}
        <Box width={'250px'}>
          <Typography variant="h6" color="secondary">
            Basic Skeleton
          </Typography>
          <Skeleton />
        </Box>

        {/* Skeleton Variants */}
        <Box width={'250px'}>
          <Typography variant="h6" color="secondary">
            Skeleton Variants
          </Typography>
          <Typography variant="body1" color="primary">
            Text
          </Typography>
          <Skeleton variant="text" />
          <Typography variant="body1" color="primary">
            Circular
          </Typography>
          <Skeleton variant="circular" width={40} height={40} />
          <Typography variant="body1" color="primary">
            Rectangular
          </Typography>
          <Skeleton variant="rectangular" width={250} height={125} />
          <Typography variant="body1" color="primary">
            Rounded
          </Typography>
          <Skeleton variant="rounded" width={250} height={125} />
        </Box>

        {/*  Skeleton with different animations */}
        <Box width={'400px'}>
          <Typography variant="h6" color="secondary">
            Skeleton with different animations
          </Typography>
          <Typography variant="body1" color="primary">
            Text - No Animation
          </Typography>
          <Skeleton variant="text" animation={false} />
          <Typography variant="body1" color="primary">
            Circular - Pulse (Default)
          </Typography>
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="pulse"
          />
          <Typography variant="body1" color="primary">
            Rectangular - Wave
          </Typography>
          <Skeleton
            variant="rectangular"
            width={250}
            height={125}
            animation="wave"
          />
          <Typography variant="body1" color="primary">
            Rounded
          </Typography>
          <Skeleton variant="rounded" width={250} height={125} />
        </Box>
      </Stack>

      {/* Skeleton Youtube Video Card Example */}
      <Box>
        <Typography variant="h6" color="secondary">
          Skeleton Youtube Video Card Example
        </Typography>
        <Box width={'250px'}>
          {isLoading ? (
            <Skeleton
              variant="rounded"
              width={256}
              height={144}
              animation="wave"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1574169208507-84376144848b"
              alt="abstract art"
              width={256}
              height={144}
            />
          )}
          <Stack
            direction="row"
            spacing={1}
            sx={{ width: '100%', marginTop: '12px' }}
          >
            {isLoading ? (
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                animation="wave"
              />
            ) : (
              <Avatar>P</Avatar>
            )}
            <Stack sx={{ width: '80%' }}>
              {isLoading ? (
                <>
                  <Typography variant="body1">
                    <Skeleton variant="text" width="100%" animation="wave" />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton variant="text" width="100%" animation="wave" />
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1">React MUI Tutorials</Typography>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default MuilSkeleton;
