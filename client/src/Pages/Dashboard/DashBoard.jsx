import React, { useState } from "react";
import { Stack } from "@mui/material";

import UploadProduct from "../../Features/Dashboard/UploadProduct";
import { selectDashboardContent } from "../../State/AppSlice";
import { useSelector } from "react-redux";
import Customers from "../../Features/Dashboard/Customers";
import Profile from "../../Features/Dashboard/Profile";
import Products from "../../Features/Dashboard/Products";

function DashBoard() {
  const DashboardContent = useSelector(selectDashboardContent);
  return (
    <Stack>
      {DashboardContent === "profile" && <Profile />}{" "}
      {DashboardContent === "profile" && <Profile />}
      {DashboardContent === "upload product" && <UploadProduct />}
      {DashboardContent === "customers" && <Customers />}
      {DashboardContent === "products" && <Products />}
    </Stack>
  );
}

export default DashBoard;
