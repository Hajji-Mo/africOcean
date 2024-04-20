import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetPendingProductsQuery } from "../../State/productsApiSlice";
import { selectLang } from "../../State/AppSlice";
import { useSelector } from "react-redux";

import ProductTableRows from "./ProductTableRows";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textTransform: "capitalize",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  textTransform: "capitalize",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Products() {
  const lang = useSelector(selectLang);

  const { data } = useGetPendingProductsQuery(lang);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product name</StyledTableCell>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>subcategory</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.doc.map((row) => (
              <ProductTableRows row={row} key={row._id} lang={lang} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
