import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 370 }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: 'Viole',
    last_name: 'Anthiftle',
    email: 'vanthiftle0@ezinearticles.com',
  },
  {
    id: 2,
    first_name: 'Kaine',
    last_name: 'Farnaby',
    email: 'kfarnaby1@google.cn',
  },
  {
    id: 3,
    first_name: 'Gregorius',
    last_name: 'Segoe',
    email: 'gsegoe2@biglobe.ne.jp',
  },
  {
    id: 4,
    first_name: 'Debora',
    last_name: 'Frontczak',
    email: 'dfrontczak3@sitemeter.com',
  },
  {
    id: 5,
    first_name: 'Lesly',
    last_name: 'Heindrich',
    email: 'lheindrich4@unblog.fr',
  },
  {
    id: 6,
    first_name: 'Shalne',
    last_name: 'Human',
    email: 'shuman5@surveymonkey.com',
  },
  {
    id: 7,
    first_name: 'Ruben',
    last_name: 'Vasyutochkin',
    email: 'rvasyutochkin6@cornell.edu',
  },
  {
    id: 8,
    first_name: 'Vivianna',
    last_name: 'Bowen',
    email: 'vbowen7@macromedia.com',
  },
  {
    id: 9,
    first_name: 'Georas',
    last_name: 'Inkster',
    email: 'ginkster8@pbs.org',
  },
  {
    id: 10,
    first_name: 'Kat',
    last_name: 'Kilmaster',
    email: 'kkilmaster9@microsoft.com',
  },
];
