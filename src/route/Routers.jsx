import { BrowserRouter, Route, Routes } from "react-router";
import {
  DepartemenPage,
  HomePage,
  Karyawanpage,
  LoginPage,
  OtpPage,
  RegisterPage,
  ResetPasswordPage,
  NotFoundPage,
  UnitPage,
} from "../pages";
import { ProtectRoute, RedirectIfAuthenticated } from "./index";
import { PhoneNumberProvider } from "../context";
import { LayoutDashboard } from "../component/layouts";
import PositionPage from "../pages/Dashboard/PositionPage";

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
          <Route path="/unit" element={<UnitPage />} />
          <Route path="/jabatan" element={<PositionPage />} />
        </Route>

        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectIfAuthenticated>
              <RegisterPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PhoneNumberProvider>
              <RedirectIfAuthenticated>
                <OtpPage />
              </RedirectIfAuthenticated>
            </PhoneNumberProvider>
          }
        />
        <Route
          path="/forgot-password/reset-password"
          element={
            <PhoneNumberProvider>
              <RedirectIfAuthenticated>
                <ResetPasswordPage />
              </RedirectIfAuthenticated>
            </PhoneNumberProvider>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
