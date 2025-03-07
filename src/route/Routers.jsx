import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage, LoginPage, MasterUserPage } from "../pages";
import { LayoutAdmin } from "../component/layout";
import { ProfilePage } from "../pages/Main";
import MasterCinemaPage from "../pages/Cinema/MasterCinema";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/main/dashboard"
          element={
            <LayoutAdmin>
              <DashboardPage />
            </LayoutAdmin>
          }
        />
        <Route
          path="/main/profile"
          element={
            <LayoutAdmin>
              <ProfilePage />
            </LayoutAdmin>
          }
        />
        <Route
          path="/cinema/master_cinema"
          element={
            <LayoutAdmin>
              <MasterCinemaPage />
            </LayoutAdmin>
          }
        />
        <Route
          path="/user/master"
          element={
            <LayoutAdmin>
              <MasterUserPage />
            </LayoutAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
