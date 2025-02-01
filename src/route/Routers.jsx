import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  DepartemenPage,
  HomePage,
  Karyawanpage,
  LoginPage,
  OtpPage,
  RegisterPage,
  ResetPasswordPage,
} from "../pages/index";
import ProtectRoute from "./ProtectRoute";
import { PhoneNumberProvider } from "../context";
import { LayoutDashboard } from "../component/layouts";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <LayoutDashboard />
            </ProtectRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/karyawan" element={<Karyawanpage />} />
          <Route path="/departement" element={<DepartemenPage />} />
        </Route>

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
