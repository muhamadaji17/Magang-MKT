export const errorOptions = {
  email: { required: "Email is Required" },
  phone: {
    required: "Phone Number is Required",
    pattern: {
      value: /^\d+$/, // Hanya angka yang diperbolehkan
      message: "Only nymbers are allowed",
    },
  },
  password: {
    required: "Password is Required",
    minLength: {
      value: 4,
      message: "Password must be at least 4 characters",
    },
  },
  confirmPassword: {
    required: "Confirm Password is Required",
    validate: (value, { password }) => {
      return value === password || "Password doesn't match";
    },
  },
  username: {
    required: "Username is Required",
    minLength: {
      value: 5,
      message: "Username must be at least 5 characters",
    },
  },
  codeOtp: {
    required: "Code OTP is Required",
    pattern: {
      value: /^\d+$/, // Hanya angka yang diperbolehkan
      message: "Only nymbers are allowed",
    },
  },
  departementName: {
    required: "Departement Name is Required",
    minLength: {
      value: 2,
      message: "Departemen Name muts be at least 2 characters",
    },
  },
  departementCode: {
    required: "Departement Code is Required",
    minLength: {
      value: 5,
      message: "Departemen Code muts be at least 5 characters",
    },
  },
};
