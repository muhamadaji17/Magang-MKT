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

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/departement" element={<Departement />} />

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
