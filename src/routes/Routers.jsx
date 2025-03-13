import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Login,
  Dashboard,
  Notfound,
  Banners,
  Country,
  Province,
  City,
  Office,
  Film,
  About,
} from "@/pages";
import MainLayout from "@/components/layout/MainLayout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<MainLayout />}>
          <Route element={<About />} path="/about" />
          <Route element={<Dashboard />} path="/" />
          <Route element={<Country />} path="/country" />
          <Route element={<Banners />} path="/banner" />
          <Route element={<Province />} path="/province" />
          <Route element={<City />} path="/city" />
          <Route element={<Office />} path="/office" />
          <Route element={<Film />} path="/film" />
          <Route element={<Notfound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
