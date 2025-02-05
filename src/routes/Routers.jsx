import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import OtpVerification from "../pages/Auth/OtpVerification";
import SetPassword from "../pages/Auth/SetPassword";
import Departement from "../pages/Departement";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departement" element={<Departement />} />
        </Route>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/auth/forgot-password/otp-verification"
          element={<OtpVerification />}
        />
        <Route
          path="/auth/forgot-password/otp-verification/set-password"
          element={<SetPassword />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
