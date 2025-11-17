/** @format */

import { loginService, logoutService } from "./authService,";
import { generateEndpointWithQuery } from "./generateEndpointWithQuery";
import { generateHeaders } from "./generateHeaders";
import { getBannerService } from "./dashboardService/bannerService";
import { getCountryService } from "./dashboardService/countryService";
import { getAboutService } from "./dashboardService/aboutService";
import { getProvinceService } from "./dashboardService/provinceService";
import { getCityService } from "./dashboardService/cityService";
import { getOfficeService } from "./dashboardService/officeService";
import {
  deleteFilmService,
  getFilmByIdService,
  getFilmService,
} from "./dashboardService/filmService";
import { getUserService } from "./dashboardService/userService";
import { getRolesService } from "./dashboardService/rolesService";
import {
  handleAddBanner,
  handleServiceWithOnClick,
} from "./handlers/bannerHandlers";

import {
  handleAddCountry,
  handleDeleteCountry,
  handleEditCountry,
} from "./handlers/countryHandlers";

import {
  handleAddProvince,
  handleDeleteProvince,
  handleEditProvince,
} from "./handlers/provinceHandlers";

import {
  handleAddCity,
  handleDeleteCity,
  handleEditCity,
} from "./handlers/cityHandlers";

import {
  handleAddAbout,
  handleEditAbout,
  handleDeleteAbout,
} from "./handlers/aboutHandlers";

import {
  handleAddOffice,
  handleEditOffice,
  handleDeleteOffice,
} from "./handlers/officeHandlers";

import {
  handleAddFilms,
  handleEditFilms,
  handleDeleteFilms,
} from "./handlers/filmsHandlers";
import {
  handleAddUser,
  handleEditUser,
  handleDeleteUser,
} from "./handlers/userHandlers";
import {
  handleAddRole,
  handleEditRole,
  handleDeleteRole,
} from "./handlers/rolesHandler";
import {
  handleAddArticleCategory,
  handleEditArticleCategory,
  handleDeleteArticleCategory,
} from "./handlers/articleHandlers";

import {
  getArticlesService,
  getArticleCategoryService,
} from "./dashboardService/articlesService";
import { getRatingService } from "./dashboardService/ratingService";
import {
  addCastingFilmService,
  deleteCastingFilmService,
  updateCastingFilmService,
} from "./dashboardService/detailFilmService";
export {
  deleteCastingFilmService,
  addCastingFilmService,
  deleteFilmService,
  updateCastingFilmService,
  getRatingService,
  getFilmByIdService,
  loginService,
  logoutService,
  generateEndpointWithQuery,
  generateHeaders,
  getBannerService,
  getCountryService,
  getAboutService,
  getProvinceService,
  getCityService,
  getOfficeService,
  getFilmService,
  getUserService,
  getRolesService,
  getArticlesService,
  getArticleCategoryService,
  handleAddBanner,
  handleServiceWithOnClick,
  handleAddCountry,
  handleDeleteCountry,
  handleEditCountry,
  handleAddProvince,
  handleDeleteProvince,
  handleEditProvince,
  handleAddCity,
  handleDeleteCity,
  handleEditCity,
  handleAddAbout,
  handleEditAbout,
  handleDeleteAbout,
  handleAddOffice,
  handleEditOffice,
  handleDeleteOffice,
  handleAddFilms,
  handleEditFilms,
  handleDeleteFilms,
  handleAddUser,
  handleEditUser,
  handleDeleteUser,
  handleAddRole,
  handleEditRole,
  handleDeleteRole,
  handleAddArticleCategory,
  handleEditArticleCategory,
  handleDeleteArticleCategory,
};
