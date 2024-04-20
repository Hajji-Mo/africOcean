import ButtonNav from "../Features/HomeFeatures/ButtonNav";
import Navbar from "../Features/HomeFeatures/Navbar";

import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { selectLang } from "../State/AppSlice";
import { useSelector } from "react-redux";
import { invoiceWords } from "../clientUtils/lists";
import { selectCartItems } from "../State/cartSlice";
import CartProducts from "../Features/Cart/CartPrdocucts";

function CartPage() {
  const componentRef = useRef();
  const lang = useSelector(selectLang);
  const cartItems = useSelector(selectCartItems);

  // total prices
  let allPrices = 0;
  cartItems.map((item) => (allPrices += item.price * item.quantity));
  const totalPrices = parseFloat(allPrices.toFixed(2));
  let date = new Date(),
    day = "" + date.getDate(),
    month = "" + (date.getMonth() + 1),
    year = date.getFullYear();
  if (day.length < 2) {
    day = 0 + day;
  }
  if (month.length < 2) {
    month = 0 + month;
  }
  return (
    <>
      <Navbar />
      <Container>
        <Stack
          flexDirection={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center", mt: 3 }}
        >
          <Typography variant="subtitle2">
            {invoiceWords.downloadText[lang]}
          </Typography>
          <Stack flexDirection={"row"} justifyContent={"flex-end"}>
            {" "}
            <ReactToPrint
              trigger={() => (
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ color: "#fff" }}
                >
                  <Typography>{invoiceWords.download[lang]}</Typography>
                </Button>
              )}
              content={() => componentRef.current}
            />
          </Stack>
        </Stack>
        <Box ref={componentRef}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ width: "95vw", my: 4 }}
          >
            <Box className="logo">
              <Box
                sx={{
                  display: "flex",
                  height: "2rem",
                  padding: "0.8rem",
                  alignItems: "center",
                  fontSize: {
                    xs: ".7rem",
                  },
                }}
              >
                <Box variant="h4" component={"h1"} fontStyle={"italic"}>
                  Afric
                </Box>
                <Box variant="h4" component={"h1"}>
                  Ocean
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginRight: 4 }}>
              <Typography
                variant="h5"
                textTransform={"uppercase"}
                fontWeight={"bold"}
              >
                {invoiceWords.invoice[lang]}
              </Typography>
              <Box sx={{ marginTop: "1rem" }}>
                <Typography variant="subtitle2">
                  {invoiceWords.invoice[lang]} No. 435
                </Typography>
                <Typography variant="subtitle2" pl={3}>
                  {day}-{month}-{year}
                </Typography>
              </Box>
            </Box>
          </Stack>
          <CartProducts
            cartItems={cartItems}
            totalPrices={totalPrices}
            invoiceWords={invoiceWords}
            lang={lang}
          />

          <Stack flexDirection={"row"} mt={3}>
            <Typography variant="h6">{invoiceWords.thanks[lang]}</Typography>
          </Stack>
          <Stack mt={3} mb={6}>
            <Typography variant="h6">{invoiceWords.payment[lang]}</Typography>
            <Typography variant="subtitle2">Atlas Mara</Typography>
            <Typography variant="subtitle2">Acount Name</Typography>
            <Typography variant="subtitle2">Acount No</Typography>
          </Stack>
        </Box>
      </Container>
      <ButtonNav />
    </>
  );
}

export default CartPage;
