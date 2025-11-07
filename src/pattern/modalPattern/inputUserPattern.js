import { errorOptions } from "../error";

export const inputAddUser = (dataRole) => [
  {
    labelText: "Username",
    name: "user_name",
    type: "text",
    optionError: errorOptions.username,
    grid: 6,
  },
  {
    labelText: "Phone Number",
    name: "user_phone",
    type: "mumber",
    optionError: errorOptions.phone,
    grid: 6,
  },
  {
    labelText: "Password",
    name: "password",
    type: "password",
    optionError: errorOptions.password,
    grid: 6,
  },
  {
    labelText: "Role",
    name: "id_role",
    type: "select",
    options: dataRole,
    optionError: errorOptions.select_role,
    optionDisabledText: "Select Role",
    grid: 6,
  },
];

export const inputEditUser = (defaultValues, dataRole) => [
  {
    labelText: "Username",
    name: "username",
    type: "text",
    defaultValue: defaultValues.user_name,
    optionError: errorOptions.username,
    grid: 6,
  },
  {
    labelText: "Phone Number",
    name: "user_phone",
    type: "mumber",
    defaultValue: defaultValues.user_phone,
    optionError: errorOptions.phone,
    grid: 6,
  },
  {
    labelText: "Password",
    name: "password",
    type: "password",
    optionError: errorOptions.password,
    grid: 6,
  },
  {
    labelText: "Role",
    name: "id_roles",
    type: "select",
    optionError: errorOptions.select_role,
    optionDisabledText: "Select Role",
    options: dataRole,
    defaultValue: defaultValues?.roles?.id_roles,
    grid: 6,
  },
];
