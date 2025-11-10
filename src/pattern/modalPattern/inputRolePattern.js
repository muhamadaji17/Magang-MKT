import { errorOptions } from "../error";

export const inputAddRole = [
  {
    labelText: "Role Name",
    name: "role_name",
    type: "text",
    optionError: errorOptions.role,
    grid: 6,
  },
  {
    labelText: "Priority",
    name: "priority",
    type: "number",
    optionError: errorOptions.priority,
    grid: 6,
  },
];

export const inputEditRole = (defaultValues) => [
  {
    labelText: "Role Name",
    name: "role_name",
    type: "text",
    defaultValue: defaultValues.role_name,
    optionError: errorOptions.role,
    grid: 6,
  },
  {
    labelText: "Priority",
    name: "priority",
    type: "number",
    defaultValue: defaultValues.priority,
    optionError: errorOptions.priority,
    grid: 6,
  },
  {
    labelText: "Status",
    name: "status",
    type: "select",
    optionDisabledText: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
    defaultValue: defaultValues.status,
    optionError: errorOptions.status,
    grid: 12,
  },
];
