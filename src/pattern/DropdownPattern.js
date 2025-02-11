import { signOut } from "../service/authService";

export const dropdownPattern = [
  { text: "Profil", destinationPath: "/" },
  {
    text: "Sign Out",
    destinationPath: "/login",
    onClick: signOut,
  },
];
