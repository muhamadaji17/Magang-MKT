import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Dashboard,
  Departement,
  NotFound,
  SetPassword,
  OtpVerification,
  ForgotPassword,
  Register,
  Login,
} from "../pages/index";
import Division from "../pages/Division";
import Position from "../pages/Position";
import ContentLayout from "../component/layout/ContentLayout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route element={<ContentLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departement" element={<Departement />} />
          <Route path="/division" element={<Division />} />
          <Route path="/position" element={<Position />} />
        </Route>

        {/* Auth routes */}
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password">
            <Route index element={<ForgotPassword />} />
            <Route path="otp-verification">
              <Route index element={<OtpVerification />} />
              <Route path="set-password" element={<SetPassword />} />
            </Route>
          </Route>
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
