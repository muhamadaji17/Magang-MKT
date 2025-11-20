/** @format */

import { errorOptions } from "../error";

export const inputAddContact = (data) => [
  {
    labelText: "Contact Name",
    name: "contact_name",
    type: "text",
    placeholder: "@RainCreation",
    grid: 6,
    optionError: errorOptions.contact_name,
  },
  {
    name: "id_contact_sosmed",
    type: "select",
    labelText: "Contact Type",
    optionDisabledText: "Select Contact Type",
    grid: 6,
    options: data,
  },
  {
    labelText: "Contact URL",
    name: "contact_url",
    type: "text",
    placeholder: "https://instagram.com",
    grid: 12,
    optionError: errorOptions.contact_url,
  },
];
export const inputEditContact = (body, data) => [
  {
    labelText: "Contact Name",
    name: "contact_name",
    type: "text",
    placeholder: "@RainCreation",
    grid: 4,
    defaultValue: body.contact_name,
  },

  {
    defaultValue: body.id_contact_sosmed,
    name: "id_contact_sosmed",
    type: "select",
    labelText: "Contact Type",
    optionDisabledText: "Select Contact Type",
    grid: 4,
    options: data,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status",
    optionDisabledText: "Select Status",
    defaultValue: body.status,
    grid: 4,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
  {
    labelText: "Contact URL",
    name: "contact_url",
    type: "text",
    placeholder: "https://instagram.com",
    grid: 12,
    defaultValue: body.contact_url,
  },
  {
    type: "hidden",
    name: "id",
    defaultValue: body.id_contact,
  },
];
