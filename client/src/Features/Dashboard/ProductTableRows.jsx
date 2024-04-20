import React from "react";
import styled from "@emotion/styled";
import { Button, TableCell, TableRow, tableCellClasses } from "@mui/material";
import { useUpdateProdcutMutation } from "../../State/productsApiSlice";

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
function ProductTableRows({ row, lang }) {
  const [updatePendingProduct] = useUpdateProdcutMutation();
  const handlePending = async () => {
    const id = row._id;
    const activeStatus = "active";
    try {
      await updatePendingProduct({ id, activeStatus });
      window.location.reload();
    } catch (err) {
      throw Error(err);
    }
  };
  return (
    <StyledTableRow key={row.name}>
      <StyledTableCell component="th" scope="row">
        {row.name}
      </StyledTableCell>
      <StyledTableCell>{row.brand}</StyledTableCell>
      <StyledTableCell>{row[lang].category}</StyledTableCell>
      <StyledTableCell>{row[lang].subcategory}</StyledTableCell>
      <StyledTableCell>${row.price}</StyledTableCell>
      <StyledTableCell>{row.activeStatus}...</StyledTableCell>
      <StyledTableCell>
        <Button onClick={handlePending}>update</Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default ProductTableRows;
