import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

const useStyles = makeStyles({
  table_container: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
  },
  table: {
    width: 300,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Temps = (props) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table_container} component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">CPU</StyledTableCell>
            <StyledTableCell align="center">GPU</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.temps.map((temp) => (
            <StyledTableRow key={temp.id}>
              <StyledTableCell align="center">
                {temp.cpu}&#176;C
              </StyledTableCell>
              <StyledTableCell align="center">
                {temp.gpu}&#176;C
              </StyledTableCell>
              <StyledTableCell align="center">
                {moment(temp.created_at).format("H:mm:ss")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Temps;
