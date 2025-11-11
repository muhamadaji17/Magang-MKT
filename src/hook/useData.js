/** @format */

import { useState } from "react";

export const useData = () => {
  const [datasRating, setDatasRating] = useState([]);
  const [datasFilms, setDatasFilms] = useState([]);
  const [datasDetailFilms, setDatasDetailFilms] = useState([]);
  const [datasCountry, setDatasCountry] = useState([]);
  const [datasProvince, setDatasProvince] = useState([]);
  const [datasCity, setDatasCity] = useState([]);
  const [datasOffice, setDatasOffice] = useState([]);
  const [datasUser, setDatasUser] = useState([]);
  const [datasRole, setDatasRole] = useState([]);

  return {
    datasRating,
    setDatasRating,
    datasDetailFilms,
    setDatasDetailFilms,
    datasFilms,
    setDatasFilms,
    datasCountry,
    setDatasCountry,
    datasProvince,
    setDatasProvince,
    datasCity,
    setDatasCity,
    datasOffice,
    setDatasOffice,
    datasUser,
    setDatasUser,
    datasRole,
    setDatasRole,
  };
};
