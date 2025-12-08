import { errorOptions } from "../error";

export const inputAddRoleMenu = (dataMenu, dataRole) => [
  {
    type: "select",
    labelText: "Menu",
    name: "id_menu",
    optionDisabledText: "Select Menu",
    options: dataMenu,
    errorOptions: errorOptions.select_menu,
  },
  {
    type: "select",
    labelText: "Role",
    name: "id_roles",
    optionDisabledText: "Select Role",
    options: dataRole,
    errorOptions: errorOptions.select_role,
  },
];

export const inputEditRoleMenu = (dataMenu, dataRole, defaultValues) => [
  {
    type: "select",
    labelText: "Menu",
    name: "id_menu",
    optionDisabledText: "Select Menu",
    options: dataMenu,
    defaultValue: defaultValues.id_menu,
    errorOptions: errorOptions.select_menu,
  },
  {
    type: "select",
    labelText: "Role",
    name: "id_roles",
    optionDisabledText: "Select Role",
    options: dataRole,
    defaultValue: defaultValues.id_roles,
    errorOptions: errorOptions.select_role,
  },
];
