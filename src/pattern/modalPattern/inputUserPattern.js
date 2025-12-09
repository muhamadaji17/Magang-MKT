/** @format */

import { errorOptions } from "../error";

export const inputAddUser = (dataRole) => [
  {
    labelText: "Username",
    name: "user_name",
    type: "text",
    optionError: errorOptions.username,
    grid: 4,
  },
  {
    labelText: "Phone Number",
    name: "user_phone",
    type: "mumber",
    optionError: errorOptions.phone,
    grid: 4,
  },
  {
    labelText: "Date of Birthdate",
    name: "dob",
    type: "date",
    optionError: errorOptions.dob,
    grid: 4,
    onFocus: true,
  },
  {
    labelText: "E-Mail",
    name: "email",
    type: "email",
    optionError: errorOptions.email,
    grid: 6,
  },
  // {
  //   labelText: "Password",
  //   name: "password",
  //   type: "password",
  //   optionError: errorOptions.password,
  //   grid: 6,
  // },
  {
    labelText: "Role",
    name: "id_roles",
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
    name: "user_name",
    type: "text",
    defaultValue: defaultValues.user_name,
    optionError: errorOptions.username,
    grid: 4,
  },
  {
    labelText: "Phone Number",
    name: "user_phone",
    type: "mumber",
    defaultValue: defaultValues.user_phone,
    optionError: errorOptions.phone,
    grid: 4,
  },

  {
    labelText: "Date of Birthdate",
    name: "dob",
    type: "date",
    optionError: errorOptions.dob,
    grid: 4,
    defaultValue: defaultValues.dob,
  },

  {
    labelText: "E-Mail",
    name: "email",
    type: "email",
    optionError: errorOptions.email,
    defaultValue: defaultValues.email,

    grid: 4,
  },

  {
    labelText: "Role",
    name: "id_roles",
    type: "select",
    optionError: errorOptions.select_role,
    optionDisabledText: "Select Role",
    options: dataRole,
    defaultValue: defaultValues?.roles?.id_roles,
    grid: 4,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status",
    optionDisabledText: "Select Status",
    defaultValue: defaultValues.status,
    grid: 4,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];
