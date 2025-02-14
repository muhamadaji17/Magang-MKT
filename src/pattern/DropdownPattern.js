import { signOut } from "../service/authService";

export const dropdownPattern = [
  { text: "Profil", destinationPath: "/profile" },
  {
    text: "Sign Out",
    destinationPath: "/login",
    onClick: signOut,
  },
];
