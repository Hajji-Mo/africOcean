import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../../../MaterialTheme";
import { useState } from "react";
import CartTableRow from "./CartTableRow";

export default function CartProducts({
  cartItems,
  totalPrices,
  invoiceWords,
  lang,
}) {
  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 440 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 100, paddingLeft: 1 }}>
                {invoiceWords.items[lang]}
              </TableCell>
              <TableCell align="left">{invoiceWords.quantity[lang]}</TableCell>
              <TableCell align="left">{invoiceWords.price[lang]}</TableCell>
              <TableCell align="left">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems &&
              cartItems.map((row) => (
                <CartTableRow row={row} key={row._id} lang={lang} />
              ))}
          </TableBody>
          <TableHead sx={{ marginRight: 5 }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell
                align="left"
                sx={{ borderTop: "solid 2px #000", fontWeight: "bold" }}
              >
                Grand Total
              </TableCell>
              <TableCell
                align="left"
                sx={{ borderTop: "solid 2px #000", fontWeight: "bold" }}
              >
                {totalPrices}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      {/* <Stack
        sx={{ alignItems: "flex-end", marginRight: "2rem", marginTop: "2rem" }}
      >
        <Stack>
          <Stack flexDirection={"row"} alignItems={"baseline"}>
            <Typography variant="h6" sx={{ pr: "3.5rem" }}>
              Grand Total:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              ${totalPrices}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            marginY={1}
            sx={{ borderBottom: "solid 2px #000" }}
          >
            <Typography variant="h6" sx={{ pr: "2rem" }}>
              Total Discount:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              - ${totalDescount}
            </Typography>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"}>
            <Typography variant="h6" sx={{ pr: ".7rem" }}>
              #Total Net Prices:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              ${totalNetPrices}
            </Typography>
          </Stack>
        </Stack>
      </Stack> */}
    </>
  );
}
