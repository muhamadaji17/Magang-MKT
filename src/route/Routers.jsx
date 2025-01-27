import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  HomePage,
  LoginPage,
  OtpPage,
  RegisterPage,
  ResetPasswordPage,
} from "../pages/index";
import ProtectRoute from "./ProtectRoute";
import { PhoneNumberProvider } from "../context";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectRoute>
              <HomePage />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
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
