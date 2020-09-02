import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  console.log(props.data)
  if(props.data){
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Public Health Unit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Not Resolved</TableCell>
              <TableCell align="right">Fatal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => ( 
              <TableRow key={row.PublicHealthUnit}>
                <TableCell component="th" scope="row">
                {row.PublicHealthUnit}
                </TableCell>
                <TableCell align="right">{row.Outcome.Total}</TableCell>
                <TableCell align="right">{row.Outcome.Recovered}</TableCell>
                <TableCell align="right">{row.Outcome.NotResolved}</TableCell>
                <TableCell align="right">{row.Outcome.Fatal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return "Currently Loading..."
}
