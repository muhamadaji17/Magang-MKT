/** @format */

import { useState } from "react";

export const useData = () => {
  const [datasRating, setDatasRating] = useState([]);
  const [datasFilms, setDatasFilms] = useState([]);
  const [datasDetailFilms, setDatasDetailFilms] = useState([]);
  const [datasCountry, setDatasCountry] = useState([]);
  const [datasProvince, setDatasProvince] = useState([]);
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
    datasUser,
    setDatasUser,
    datasRole,
    setDatasRole,
  };
};
