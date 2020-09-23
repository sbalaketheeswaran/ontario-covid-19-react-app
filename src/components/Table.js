import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rowHeaderCells = [
  { id: 'PublicHealthUnit', numeric: false, label: 'Public Health ID' },
  { id: 'Total', numeric: true, label: 'Total' },
  { id: 'Recovered', numeric: true, label: 'Recovered' },
  { id: 'NotResolved', numeric: true, label: 'Not Resolved' },
  { id: 'Fatal', numeric: true, label: 'Fatal' },
];

export default function SimpleTable(props) {
  const classes = useStyles();
  console.log(props.data)
  if(props.data){
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            {rowHeaderCells.map((rowHeadCell) => ( 
            <TableCell
            key={rowHeadCell.id}
            align={rowHeadCell.numeric ? 'right' : 'left'}
          >
              <TableSortLabel
              active={props.columnToSort  === rowHeadCell.id}
              direction={props.columnToSort  === rowHeadCell.id ? props.sortDirection : 'asc'}
              onClick={() => props.handleSort(rowHeadCell.id)}
            >
              {rowHeadCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => ( 
              <TableRow key={row.PublicHealthUnit}>
                <TableCell align="left" component="th" scope="row">
                {row.PublicHealthUnit}
                </TableCell>
                <TableCell align="right">{row.Total}</TableCell>
                <TableCell align="right">{row.Recovered}</TableCell>
                <TableCell align="right">{row.NotResolved}</TableCell>
                <TableCell align="right">{row.Fatal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return "Currently Loading..."
}
