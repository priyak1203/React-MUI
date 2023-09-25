import { Typography } from '@mui/material';

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading </Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 1</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa
        recusandae soluta deleniti dolore fugiat neque veritatis voluptate quasi
        modi alias aliquam nostrum, distinctio aperiam ipsa atque, quidem
        quisquam vitae!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam
        alias neque fuga qui eligendi? Debitis enim perspiciatis magni. Officia
        nam voluptatibus rem esse voluptates amet magnam nulla, excepturi omnis?
      </Typography>

      <Typography variant="h4" component="h1" gutterBottom>
        h4 as h1 heading
      </Typography>
    </div>
  );
};

export default MuiTypography;
