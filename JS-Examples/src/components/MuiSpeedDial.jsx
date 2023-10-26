import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: 'absolute', bottom: '16px', right: '16px' }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" tooltipOpen />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
