/** @format */

import { useState } from "react";

export const useData = () => {
  const [datasAbout, setDatasAbout] = useState([]);
  const [datasRating, setDatasRating] = useState([]);
  const [datasFilms, setDatasFilms] = useState([]);
  const [datasDetailFilms, setDatasDetailFilms] = useState([]);
  const [datasCountry, setDatasCountry] = useState([]);
  const [datasProvince, setDatasProvince] = useState([]);
  const [datasCity, setDatasCity] = useState([]);
  const [datasOffice, setDatasOffice] = useState([]);
  const [datasUser, setDatasUser] = useState([]);
  const [datasRole, setDatasRole] = useState([]);
  const [datasArticle, setDatasArticle] = useState([]);
  const [datasArticleCategory, setDatasArticleCategory] = useState([]);
  const [datasContact, setDatasContact] = useState([]);
  const [datasContactCategory, setDatasContactCategory] = useState([]);
  const [datasDetailArticles, setDatasDetailArticles] = useState({});
  const [datasSubscribers, setDatasSubscribers] = useState([]);
  const [datasRoleMenu, setDatasRoleMenu] = useState([]);

  return {
    datasContact,
    setDatasContact,
    datasContactCategory,
    setDatasContactCategory,
    datasAbout,
    setDatasAbout,
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
    datasArticle,
    setDatasArticle,
    datasArticleCategory,
    setDatasArticleCategory,
    datasDetailArticles,
    setDatasDetailArticles,
    datasSubscribers,
    setDatasSubscribers,
    datasRoleMenu,
    setDatasRoleMenu,
  };
};
