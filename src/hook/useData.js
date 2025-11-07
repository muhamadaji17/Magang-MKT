/** @format */

import { useState } from "react";

export const useData = () => {
  const [datasRating, setDatasRating] = useState([]);
  const [datasFilms, setDatasFilms] = useState([]);
  const [datasDetailFilms, setDatasDetailFilms] = useState([]);
  return {
    datasRating,
    setDatasRating,
    datasDetailFilms,
    setDatasDetailFilms,
    datasFilms,
    setDatasFilms,
  };
};
