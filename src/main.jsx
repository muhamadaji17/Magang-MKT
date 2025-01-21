import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TokenContextProvider } from "./context/TokenContextProvider.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import ResetPassword from "./page/ResetPassword.jsx";
import ProtectProvider from "./ProtectProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <ProtectProvider>
                <App />
              </ProtectProvider>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </TokenContextProvider>
  </StrictMode>
);
