/** @format */

import { errorOptions } from "../error";

export const inputAddMenu = (options) => [
  {
    labelText: "Menu Name",
    name: "menu_name",
    type: "text",
    optionError: errorOptions.menu_name,
    grid: 4,
  },
  {
    labelText: "Menu URL",
    name: "menu_url",
    type: "text",
    optionError: errorOptions.menu_url,
    grid: 4,
  },
  {
    labelText: "parrent_id",
    name: "parrent_id",
    type: "select",
    options: options,
    optionDisabledText: "Pilih parrent_id",
    grid: 4,
  },
  {
    labelText: "Icon Menu",
    name: "menu_icon",
    type: "file",
    // optionError: errorOptions.img,
  },
];
export const inputEditMenu = (body, options) => [
  {
    labelText: "Menu Name",
    name: "menu_name",
    type: "text",
    optionError: errorOptions.menu_name,
    defaultValue: body.menu_name,
    grid: 4,
  },
  {
    labelText: "Menu Name",
    name: "menu_url",
    type: "text",
    optionError: errorOptions.menu_url,
    defaultValue: body.menu_url,
    grid: 4,
  },
  {
    labelText: "parrent_id",
    name: "parrent_id",
    type: "select",
    options: options,
    optionDisabledText: "Pilih parrent_id",
    grid: 4,
    defaultValue: body.parrent_id,
  },
  {
    labelText: "Icon Menu",
    name: "menu_icon",
    type: "file",
    optionError: errorOptions.img,
    defaultValue: body.logo,
  },
];
