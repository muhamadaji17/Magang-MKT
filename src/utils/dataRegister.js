const dataRegister = [
  {
    id: "username",
    type: "text",
    placeholder: "Username",
    labelName: "Username",
    validation: { required: "Username is required" },
  },
  {
    id: "phone_number",
    type: "text",
    placeholder: "08123456789",
    labelName: "Phone Number",
    validation: { required: "Phone Number is required" },
  },
  {
    id: "email",
    type: "email",
    placeholder: "example@gmail.com",
    labelName: "Email",
    validation: { required: "Email is required" },
  },
  {
    id: "password",
    type: "password",
    placeholder: "********",
    labelName: "Password",
    validation: { required: "Password is required" },
  },
  // Tambahkan input lainnya sesuai kebutuhan
];

export default dataRegister;
