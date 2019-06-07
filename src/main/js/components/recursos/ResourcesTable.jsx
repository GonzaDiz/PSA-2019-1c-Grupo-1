import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import response from './MockResourcesTableData';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * (3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});



const ResourcesTable = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">CUIT</TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Seniority</TableCell>
            <TableCell align="left">Sueldo</TableCell>
            <TableCell align="left">Límite de horas semanales</TableCell>
            <TableCell align="left">Nivel de carga</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response.data.map(r => (
            <TableRow key={r.cuit}>
              <TableCell component="th" scope="row">
                <Link>{r.cuit}</Link>
              </TableCell>
              <TableCell align="left">{`${r.firstName} ${r.lastName}`}</TableCell>
              <TableCell align="left">{r.seniority}</TableCell>
              <TableCell align="left">{`$ ${r.salary}`}</TableCell>
              <TableCell align="left">{r.limWeekHours}</TableCell>
              <TableCell align="left">{`${r.workload} %`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles, { withTheme: true })(ResourcesTable);