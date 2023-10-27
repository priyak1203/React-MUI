import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material';

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      {/* Basic Avatar with Initials */}
      <Box>
        <Typography variant="h6" color="secondary">
          Basic Avatar with Initials
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>DE</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
        </Stack>
      </Box>

      {/* Avatar with Images */}
      <Box>
        <Typography variant="h6" color="secondary">
          Avatar with Images
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>DE</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="susan smith"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/47.jpg"
            alt="John Doe"
          />
        </Stack>
      </Box>

      {/* Avatar with different size and shape */}
      <Box>
        <Typography variant="h6" color="secondary">
          Avatar with different size and shape
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>DE</Avatar>
          <Avatar sx={{ bgcolor: 'success.light', width: 48, height: 48 }}>
            SS
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="Alan Garcia"
            sx={{ width: 56, height: 56 }}
          />
          <Avatar variant="square" sx={{ bgcolor: 'primary.light' }}>
            FS
          </Avatar>
          <Avatar sx={{ bgcolor: 'primary.light' }} variant="rounded">
            AY
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/48.jpg"
            alt="Constance Long"
            sx={{ width: 48, height: 48 }}
            variant="square"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/95.jpg"
            alt="Zoya Ahmed"
            sx={{ width: 56, height: 56 }}
            variant="rounded"
          />
        </Stack>
      </Box>

      {/* Avatar Group */}
      <Box>
        <Typography variant="h6" color="secondary">
          Avatar Group
        </Typography>
        <Stack direction="row" spacing={2}>
          <AvatarGroup>
            <Avatar sx={{ bgcolor: 'primary.light' }}>DE</Avatar>
            <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="susan smith"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="John Doe"
            />
          </AvatarGroup>
        </Stack>
      </Box>

      {/*  Avatar Group with max prop */}
      <Box>
        <Typography variant="h6" color="secondary">
          Avatar Group with max prop
        </Typography>
        <Stack direction="row" spacing={2}>
          <AvatarGroup max={4}>
            <Avatar sx={{ bgcolor: 'primary.light' }}>DE</Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="susan smith"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="Ricky Cox"
            />
            <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="John Doe"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/women/71.jpg"
              alt="Lillie Mcdonalid"
            />
          </AvatarGroup>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MuiAvatar;
