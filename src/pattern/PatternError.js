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
      value: 5,
      message: "Password must be at least 5 characters",
    },
  },
  confirmPassword: {
    required: "Confirm Password is Required",
    validate: (value, { password }) => {
      return value === password || "Password doesn't match";
    },
  },
  username: { required: "Username is Required" },
  codeOtp: {
    required: "Code OTP is Required",
    pattern: {
      value: /^\d+$/, // Hanya angka yang diperbolehkan
      message: "Only nymbers are allowed",
    },
  },
};
