/** @format */

import { errorOptions } from "../error";

export const inputAddAbout = [
  {
    name: "about_meta",
    type: "text",
    labelText: "Title",
    grid: 12,
    optionError: errorOptions.title_about,
  },
  {
    type: "editor_about",
    name: "about_body_en",
    labelText: "English Language",
    className: "h-[300px] mb-28 lg:mb-24",
    grid: 6,
    optionError: errorOptions.desc_about,
  },
  {
    name: "about_body_id",
    type: "editor_about",
    labelText: "Indonesia Language",
    className: "h-[300px] mb-28 lg:mb-24",
    grid: 6,
    optionError: errorOptions.desc_about,
  },
];

export const inputEditAbout = (dataDefaults) => [
  {
    name: "about_meta",
    type: "text",
    labelText: "Title",
    defaultValue: dataDefaults.about_meta,
    grid: 6,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status",
    optionDisabledText: "Select Status",
    grid: 6,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
    defaultValue: dataDefaults.status,
  },
  {
    type: "editor_about",
    name: "about_body_en",
    className: "h-[300px] mb-28 lg:mb-24",
    labelText: "Language English",
    defaultValue: dataDefaults.about_body_en,
    grid: 6,
  },

  {
    name: "about_body_id",
    type: "editor_about",
    className: "h-[300px] mb-28 lg:mb-24",
    labelText: "Language Indonesia",
    defaultValue: dataDefaults.about_body_id,
    grid: 6,
  },
];
