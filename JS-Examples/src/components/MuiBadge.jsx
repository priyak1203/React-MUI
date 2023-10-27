import { Badge, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={2} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={106} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={235} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary" invisible={true}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;

<Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>;
