import { errorOptions } from "../error";

export const inputAddArticle = [
  {
    labelText: "Banner Article",
    name: "article_banner",
    type: "file",
    optionError: errorOptions.banner_article,
    grid: 8,
  },
  {
    labelText: "Thumbnail Article",
    name: "article_thumbnail",
    type: "file",
    optionError: errorOptions.thumbnail_article,
    grid: 4,
  },
  {
    labelText: "Article Title",
    name: "article_title",
    type: "text",
    optionError: errorOptions.title_article,
    grid: 6,
  },
  {
    labelText: "Article Slug",
    name: "article_slug",
    type: "text",
    optionError: errorOptions.author_article,
    grid: 6,
  },
  {
    labelText: "Content",
    name: "article_content",
    type: "editor_about",
    optionError: errorOptions.content_article,
    className: "h-[400px]",
    grid: 12,
  },
];
