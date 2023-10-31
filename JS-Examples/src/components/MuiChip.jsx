import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack spacing={2}>
      {/* Basic Chip */}
      <Box>
        <Typography variant="h6" color="primary">
          Basic Chip
        </Typography>
        <Chip label="Chip" />
      </Box>
      {/* Chip with diffent variants, size and color */}
      <Box>
        <Typography variant="h6" color="primary">
          Chip with diffent variants, size and color
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip label="Primary" color="primary" />
          <Chip label="Success" color="success" />
          <Chip label="Outlined" color="secondary" variant="outlined" />
          <Chip label="Small" color="primary" size="small" />
        </Box>
      </Box>

      {/* Chip with avatar */}
      <Box>
        <Typography variant="h6" color="primary">
          Chip with avatar
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip label="Venessa" avatar={<Avatar>V</Avatar>} />
          <Chip
            label="Constance"
            avatar={
              <Avatar
                alt="Constance"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
            }
          />
        </Box>
      </Box>

      {/* Chip with Icons */}
      <Box>
        <Typography variant="h6" color="primary">
          Chip with Icons
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip label="Users" icon={<PeopleAltIcon />} />
          <Chip label="Pictures" icon={<CameraAltIcon />} variant="outlined" />
        </Box>
      </Box>

      {/* Clickable Chip */}
      <Box>
        <Typography variant="h6" color="primary">
          Clickable Chip
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip
            label="Clickable"
            color="success"
            onClick={() => alert('Clicked')}
          />
          <Chip
            label="Deletable"
            color="error"
            onDelete={() => alert('Delete Handler Called')}
          />
          <Chip
            label="Delete"
            color="error"
            onDelete={() => alert('Delete Handler Called')}
            deleteIcon={<DeleteIcon />}
          />
          <Chip
            label="Click or Delete"
            color="secondary"
            onClick={() => alert('Clicked')}
            onDelete={() => alert('Delete Handler Called')}
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Chip Array */}
      <Box>
        <Typography variant="h6" color="primary">
          Chip Array
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default MuiChip;
