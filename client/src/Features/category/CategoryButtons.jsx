"use client";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { PiTarget } from "react-icons/pi";
import { PiUsersFour } from "react-icons/pi";
import { colors } from "../../../MaterialTheme";
import { subcategories } from "../../clientUtils/catagories";
import MobileSubcategories from "./MobileSubcategories";
import { keywords } from "../../clientUtils/lists";
import { useSelector } from "react-redux";
import { selectLang } from "../../State/AppSlice";
import { Link } from "react-router-dom";

function CategoryButtons() {
  const [showsubcategory, setShowsubcategory] = useState(false);
  const lang = useSelector(selectLang);
  return (
    <Stack
      sx={{
        "@media screen and (min-width: 768px)": {
          display: "none",
        },
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          marginTop: ".5rem",
          overflowX: "auto",
        }}
      >
        <Stack direction={"row"}>
          {" "}
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "capitalize",
              width: "11rem",
              lineHeight: 1,
              fontSize: "0.8rem",
              color: colors.white,
            }}
            onClick={() =>
              setShowsubcategory((showsubcategory) => !showsubcategory)
            }
          >
            <Typography sx={{ fontSize: "0.8rem" }}>
              {keywords.category[lang]}
            </Typography>
            <Box sx={{ pl: ".2rem", fontSize: "1.3rem", mt: ".3rem" }}>
              <BiCategory />
            </Box>
          </Button>
          <Link
            to={
              "https://wa.me/260773416630?text=i'm intrested to be Part of AfricOcean Market"
            }
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "capitalize",
                lineHeight: 1,
                ml: ".4rem",
                color: colors.white,
                bgcolor: "#5d3506",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem" }}>
                {keywords.supplier[lang]}
              </Typography>
              <Box sx={{ pl: ".2rem", fontSize: "2rem", mt: ".3rem" }}>
                <PiUsersFour />
              </Box>
            </Button>
          </Link>
          <Link
            to={
              "https://wa.me/260773416630?text=i'm intrested to get qoutantion of some products"
            }
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "capitalize",
                lineHeight: 1,
                ml: ".4rem",
                color: colors.white,
                bgcolor: "#940de2",
              }}
            >
              <Typography sx={{ fontSize: ".8rem" }}>
                {keywords.quotaion[lang]}
              </Typography>
              <Box sx={{ pl: ".2rem", fontSize: "2rem", mt: ".3rem" }}>
                <PiTarget />
              </Box>
            </Button>
          </Link>
        </Stack>
      </Stack>
      {showsubcategory && (
        <Paper sx={{ padding: "1.3rem" }}>
          <Grid container>
            {subcategories &&
              subcategories.map((subcategory, index) => (
                <MobileSubcategories
                  subcategory={subcategory}
                  key={index}
                  setShowsubcategory={setShowsubcategory}
                  showsubcategory={showsubcategory}
                />
              ))}
          </Grid>
        </Paper>
      )}
    </Stack>
  );
}

export default CategoryButtons;
