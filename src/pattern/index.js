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
    handleChange,
} from "./handleButton";
import { sidebarPattern } from "./sidebarPattern";
import { inputAbout, inputEditAbout } from "./dashboard/about";
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
import { filmSearchPattern } from "./search/filmSearchPattern";
import { officeSearchPattern } from "./search/officeSearchPattern";
import { citySearchPattern } from "./search/citySearchPattern";
import { provinceSearchPattern } from "./search/provinceSearchPattern";
import { countrySearchPattern } from "./search/countrySearchPattern";

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
    handleChange,
    inputEditAbout,
    filmSearchPattern,
    officeSearchPattern,
    citySearchPattern,
    provinceSearchPattern,
    countrySearchPattern,
};
