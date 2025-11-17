import { errorOptions } from "../error";

export const inputAddArticle = [
  {
    labelText: "Image Article",
    name: "article_img",
    type: "file",
    optionError: errorOptions.img,
    grid: 12,
  },
  {
    labelText: "Article Title",
    name: "article_title",
    type: "text",
    optionError: errorOptions.title_article,
    grid: 6,
  },

  {
    labelText: "Author Name",
    name: "article_author_name",
    type: "text",
    optionError: errorOptions.author_article,
    grid: 6,
  },
];
