export const inputEditSubscribers = (defaultValues) => [
  {
    name: "status",
    type: "select",
    label: "Name",
    optionDisabledText: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
    grid: 12,
    defaultValue: defaultValues.status,
  },
];
