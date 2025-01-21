import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
