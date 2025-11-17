import { errorOptions } from "../error";

export const inputAddArticle = (articleCategory) => [
  {
    labelText: "Article Title",
    name: "article_title",
    type: "text",
    optionError: errorOptions.title_article,
    grid: 4,
  },
  {
    labelText: "Article Slug",
    name: "article_slug",
    type: "text",
    optionError: errorOptions.article_slug,
    grid: 4,
  },
  {
    labelText: "Article Category",
    name: "id_article_category",
    type: "select",
    optionError: errorOptions.select_category,
    options: articleCategory,
    grid: 4,
  },
  {
    labelText: "Banner Article",
    name: "article_img",
    type: "file",
    optionError: errorOptions.article_img,
    className: "w-full h-[400px]",
    grid: 12,
  },
  {
    labelText: "Article Content EN",
    name: "article_content_en",
    type: "editor_about",
    optionError: errorOptions.article_content,
    className: "h-[500px] mb-28 md:mb-36 xl:mb-20",
    grid: 6,
  },
  {
    labelText: "Article Content ID",
    name: "article_content_id",
    type: "editor_about",
    optionError: errorOptions.article_content,
    className: "h-[500px] mb-28 md:mb-36 xl:mb-20",
    grid: 6,
  },
];

export const inputEditArticle = (articleCategory) => [
  {
    labelText: "Article Title",
    name: "article_title",
    type: "text",
    optionError: errorOptions.article_title,
    grid: 4,
  },
  {
    labelText: "Article Slug",
    name: "article_slug",
    type: "text",
    optionError: errorOptions.article_slug,
    grid: 4,
  },
  {
    labelText: "Article Category",
    name: "id_article_category",
    type: "select",
    optionError: errorOptions.select_category,
    options: articleCategory,
    grid: 4,
  },
  {
    labelText: "Banner Article",
    name: "article_banner",
    type: "file",
    optionError: errorOptions.article_img,
    className: "w-full h-[400px]",
    grid: 12,
  },
  {
    labelText: "Article Content EN",
    name: "article_content_en",
    type: "editor_about",
    optionError: errorOptions.article_content,
    className: "h-[500px] mb-28 md:mb-36 xl:mb-20",
    grid: 6,
  },
  {
    labelText: "Article Content ID",
    name: "article_content_id",
    type: "editor_about",
    optionError: errorOptions.article_content,
    className: "h-[500px] mb-28 md:mb-36 xl:mb-20",
    grid: 6,
  },
];

export const inputAddArticleCategories = [
  {
    labelText: "Category Name",
    name: "article_category_name",
    type: "text",
    optionError: errorOptions.category_name,
    grid: 12,
  },
];

export const inputEditArticleCategories = (defaultValue) => [
  {
    labelText: "Category Name",
    name: "article_category_name",
    type: "text",
    optionError: errorOptions.category_name,
    grid: 12,
    defaultValue: defaultValue.article_category_name,
  },
  {
    labelText: "Status",
    name: "status",
    type: "select",
    optionDisabledText: "Select Status",
    defaultValue: defaultValue.status,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
    grid: 12,
  },
];
