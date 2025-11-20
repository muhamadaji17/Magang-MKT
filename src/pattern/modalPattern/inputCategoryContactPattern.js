/** @format */

import { errorOptions } from "../error";

export const inputAddContactCategory = [
  {
    labelText: "Contact Type",
    name: "contact_sosmed_name",
    type: "text",
    placeholder: "Gmail",
    optionError: errorOptions.contact_sosmed_name,
  },
  {
    labelText: "Contact Icon",
    name: "contact_sosmed_logo",
    type: "file",
    optionError: errorOptions.contact_sosmed_logo,
  },
];
export const inputEditContactCategory = (data) => [
  {
    labelText: "Contact Type",
    name: "contact_sosmed_name",
    type: "text",
    placeholder: "Gmail",
    optionError: errorOptions.contact_sosmed_name,
    defaultValue: data.contact_sosmed_name,
    grid: 6,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status",
    optionDisabledText: "Select Status",
    defaultValue: data.status,
    grid: 6,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
  {
    type: "hidden",
    name: "id",
    defaultValue: data.id_contact_sosmed,
  },
  {
    labelText: "Contact Icon",
    name: "contact_sosmed_logo",
    type: "file",
    optionError: errorOptions.contact_sosmed_logo,
    defaultValue: data.contact_sosmed_logo,
  },
];
