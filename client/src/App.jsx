import React, { lazy, Suspense } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import { theme } from "../MaterialTheme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SpinnerFullPage from "./clientUtils/SpinnerFullPage";

const HomePage = lazy(() => import("./Pages/HomePage"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail"));
const Register = lazy(() => import("./Pages/RegisterPage"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const RequireAuth = lazy(() => import("./clientUtils/RequireAuth"));
const Dashboard = lazy(() => import("./Pages/Dashboard/DashBoard"));
const DashLayout = lazy(() => import("./Pages/Dashboard/layout"));
const CartPage = lazy(() => import("./Pages/CartPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Navigate replace to="Home" />} />
            <Route path="Home" element={<HomePage />} />
            <Route path="Register" element={<Register />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="Cart" element={<CartPage />} />
            <Route path="Product/:id" element={<ProductDetail />} />
            <Route element={<RequireAuth />}>
              <Route element={<DashLayout />}>
                <Route path="Dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>{" "}
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
