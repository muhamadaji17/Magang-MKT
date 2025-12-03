/** @format */

import {
  loginService,
  logoutService,
  getOtpService,
  setPasswordService,
} from "./authService,";
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
  handleAddArticle,
  handleEditArticle,
  handleDeleteArticle,
  handleAddArticleCategory,
  handleEditArticleCategory,
  handleDeleteArticleCategory,
} from "./handlers/articleHandlers";

import {
  getArticlesService,
  getArticleByIdService,
  getArticleCategoryService,
  updateArticlesStatusService,
  checkSlugArticleIdService,
  checkSlugArticleEnService,
} from "./dashboardService/articlesService";
import { getRatingService } from "./dashboardService/ratingService";
import {
  handleAddRating,
  handleEditRating,
  handleDeleteRating,
} from "./handlers/ratingHandlers";
import {
  addCastingFilmService,
  deleteCastingFilmService,
  updateCastingFilmService,
} from "./dashboardService/detailFilmService";
import {
  addCategoryContactService,
  deleteCategoryContactService,
  getCategoryContactService,
  updateCategoryContactService,
} from "./dashboardService/contactCategoryService";
import {
  addContactService,
  deleteContactService,
  getContactService,
  updateContactService,
} from "./dashboardService/contactService";
import { getSubscribersService } from "./dashboardService/subscribersService";
import {
  handleEditSubscribers,
  handleDeleteSubscribers,
} from "./handlers/subscribershandlers";
export {
  getSubscribersService,
  getOtpService,
  setPasswordService,
  getContactService,
  addContactService,
  updateContactService,
  deleteContactService,
  deleteCategoryContactService,
  updateCategoryContactService,
  addCategoryContactService,
  getCategoryContactService,
  deleteCastingFilmService,
  updateCastingFilmService,
  addCastingFilmService,
  deleteFilmService,
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
  updateArticlesStatusService,
  getArticleByIdService,
  getArticleCategoryService,
  checkSlugArticleIdService,
  checkSlugArticleEnService,
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
  handleAddArticle,
  handleEditArticle,
  handleDeleteArticle,
  handleAddArticleCategory,
  handleEditArticleCategory,
  handleDeleteArticleCategory,
  handleAddRating,
  handleEditRating,
  handleDeleteRating,
  handleEditSubscribers,
  handleDeleteSubscribers,
};
