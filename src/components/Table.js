import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Grid from "@material-ui/core/Grid/Grid";


const rowHeaderCells = [
  { id: 'PublicHealthUnit', numeric: false, label: 'Public Health ID' },
  { id: 'Total', numeric: true, label: 'Total' },
  { id: 'Recovered', numeric: true, label: 'Recovered' },
  { id: 'NotResolved', numeric: true, label: 'Not Resolved' },
  { id: 'Fatal', numeric: true, label: 'Fatal' },
];

export default function SimpleTable(props) {
  console.log(props.data)
  if(props.data){
    return (
      <Grid container justify={"center"}>
        <Grid item xs={12} md={10} style={{ padding: "8px" }}>
          <Paper style={{ overflowX: "auto" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                {rowHeaderCells.map((rowHeadCell) => ( 
                <TableCell
                key={rowHeadCell.id}
                align={rowHeadCell.numeric ? 'right' : 'left'}>
                  <TableSortLabel
                  active={props.columnToSort  === rowHeadCell.id}
                  direction={props.columnToSort  === rowHeadCell.id ? props.sortDirection : 'asc'}
                  onClick={() => props.handleSort(rowHeadCell.id)}>
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
          </Paper>
        </Grid>
      </Grid>
    );
  }
  return "Currently Loading..."
}
