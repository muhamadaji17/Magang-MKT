import inputLogin from "./patternAuth/login";
import errorOptions from "./errorOptions";
import {
    handleSubmitData,
    handleShowPassword,
    handleShowModalId,
    handleShowModal,
    handleCancelModal,
    handleCloseBgModal,
    saveEvents,
    handleFileChange,
} from "./handleButton";
import { sidebarPattern } from "./sidebarPattern";
import { inputAbout } from "./dashboard/about";
import { inputBanner, inputEditBanner } from "./dashboard/banner";
import { inputCountry, inputEditCountry } from "./dashboard/country";
import { countryTablePattern } from "./table/countryTablePattern";
import { inputProvince, inputEditProvince } from "./dashboard/province";
import { inputCity, inputEditCity } from "./dashboard/city";
import { provinceTablePattern } from "./table/provinceTablePattern";
import { cityTablePattern } from "./table/cityTablePattern";
import { officeTablePattern } from "./table/officeTablePattern";
import { inputOffice, inputEditOffice } from "./dashboard/office";
import { inputFilm, inputEditFilm } from "./dashboard/films";
import { filmTablePattern } from "./table/filmTablePattern";

export {
    inputLogin,
    errorOptions,
    handleSubmitData,
    handleShowPassword,
    sidebarPattern,
    handleShowModal,
    handleShowModalId,
    handleCancelModal,
    handleCloseBgModal,
    inputAbout,
    inputBanner,
    inputEditBanner,
    saveEvents,
    inputCountry,
    inputEditCountry,
    countryTablePattern,
    inputProvince,
    inputEditProvince,
    provinceTablePattern,
    inputCity,
    inputEditCity,
    cityTablePattern,
    officeTablePattern,
    inputOffice,
    inputEditOffice,
    inputFilm,
    inputEditFilm,
    filmTablePattern,
    handleFileChange,
};
