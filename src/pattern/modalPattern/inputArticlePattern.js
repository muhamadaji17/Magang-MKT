import { errorOptions } from "../error";

export const inputAddArticle = [
  {
    labelText: "Banner Article",
    name: "article_banner",
    type: "file",
    optionError: errorOptions.banner_article,
    className: "w-full h-[400px]",
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
    labelText: "Article Slug",
    name: "article_slug",
    type: "text",
    optionError: errorOptions.author_article,
    grid: 6,
  },
  {
    labelText: "Article Content EN",
    name: "article_content_en",
    type: "editor_about",
    optionError: errorOptions.content_article,
    className: "h-[500px] mb-28 md:mb-36",
    grid: 6,
  },
  {
    labelText: "Article Content id",
    name: "article_content_id",
    type: "editor_about",
    optionError: errorOptions.content_article,
    className: "h-[500px] mb-28 md:mb-36",
    grid: 6,
  },
];
