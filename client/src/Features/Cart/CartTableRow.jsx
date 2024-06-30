import { Box, Input, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { addToCart } from "../../State/cartSlice";

function CartTableRow({ row, lang }) {
  const [value, setvalue] = useState(row.quantity);
  const handleQuantity = (e) => {
    setvalue(e.target.value);
    addToCart(row._id, e.target.value);
  };
  return (
    <TableRow key={row._id}>
      <TableCell
        component="th"
        scope="row"
        className="cartItem-name"
        sx={{ paddingY: "1rem" }}
      >
        {`${row.name.slice(0, 13)}`}
      </TableCell>
      <TableCell align="left">
        <Box sx={{ maxWidth: "4rem" }}>
          <Input
            type="number"
            variant="standard"
            disableUnderline={true}
            value={value}
            sx={{
              "&:hover": { background: "#f3f3f3" },
            }}
            onChange={handleQuantity}
          />
        </Box>
      </TableCell>
      <TableCell align="left">${row.price}</TableCell>
      <TableCell align="left">${row.price * row.quantity}</TableCell>
    </TableRow>
  );
}

export default CartTableRow;
