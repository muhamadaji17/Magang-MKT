import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage, OtpPage, RegisterPage } from "../pages/index";
import ProtectRoute from "./ProtectRoute";
import PhoneNumberProvider from "../context/PhoneNumberProvider";
import { TokenContextProvider } from "../context/TokenContextProvider";
import HomePage from "../pages/Dashboard/HomePage";
import ResetPasswordPage from "../pages/Auth/ResetPasswordPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectRoute>
              <TokenContextProvider>
                <HomePage />
              </TokenContextProvider>
            </ProtectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <TokenContextProvider>
              <LoginPage />
            </TokenContextProvider>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/forgot-password"
          element={
            <PhoneNumberProvider>
              <OtpPage />
            </PhoneNumberProvider>
          }
        />
        <Route
          path="/forgot-password/reset-password"
          element={
            <PhoneNumberProvider>
              <ResetPasswordPage />
            </PhoneNumberProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
