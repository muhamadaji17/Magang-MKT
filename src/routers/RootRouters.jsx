/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/layouts";
import {
  Banner,
  Home,
  Login,
  About,
  PageNotFound,
  Country,
  Province,
  City,
  Office,
  Films,
  DetailFilmPage,
  User,
  Roles,
  Articles,
  ArticleDetail,
  ArticleCategories,
  Rating,
  ContactCategoryPage,
  ContactPage,
  ForgotPassword,
  MenuPage,
} from "../pages";
import { ProtectedRoute, PublicRoute } from "./Middleware";

const RootRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/detail" element={<DetailFilmPage />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/country" element={<Country />} />
          <Route path="/province" element={<Province />} />
          <Route path="/city" element={<City />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/office" element={<Office />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:action" element={<ArticleDetail />} />
          <Route path="/article-categories" element={<ArticleCategories />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/contact-categories" element={<ContactCategoryPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/role" element={<Roles />} />
          <Route path="/menu" element={<MenuPage />} />
        </Route>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route
          path="/forgot-password"
          element={<PublicRoute element={<ForgotPassword />} />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouters;
