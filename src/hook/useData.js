/** @format */

import { useState } from "react";

export const useData = () => {
  const [datasRating, setDatasRating] = useState([]);
  const [datasFilms, setDatasFilms] = useState([]);
  const [datasDetailFilms, setDatasDetailFilms] = useState([]);
  const [datasUser, setDatasUser] = useState([]);
  const [datasRole, setDatasRole] = useState([]);

  return {
    datasRating,
    setDatasRating,
    datasDetailFilms,
    setDatasDetailFilms,
    datasFilms,
    setDatasFilms,
    datasUser,
    setDatasUser,
    datasRole,
    setDatasRole,
  };
};
