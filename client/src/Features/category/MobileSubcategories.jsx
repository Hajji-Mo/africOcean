import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { colors } from "../../../MaterialTheme";
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery, selectLang } from "../../State/AppSlice";

function MobileSubcategories({
  subcategory,
  setShowsubcategory,
  showsubcategory,
}) {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);

  const handleBrandfliter = () => {
    dispatch(getSearchQuery(subcategory[lang]));
    setShowsubcategory((showsubcategory) => !showsubcategory);
  };

  return (
    <Grid item xs={4}>
      <Box
        sx={{
          padding: "0.7rem",
          fontSize: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
          cursor: "pointer",
        }}
        onClick={() => handleBrandfliter()}
      >
        <Box>{subcategory.icon}</Box>
        <Typography textTransform={"capitalize"}>
          {subcategory[lang]}
        </Typography>
      </Box>
    </Grid>
  );
}

export default MobileSubcategories;
