import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-screen gap-3 h-screen justify-center items-center">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <p>Maaf halaman tidak di temukan.</p>

      <Link to={"/"} className="underline text-blue-800">
        Kembali
      </Link>
    </div>
  );
};

export default NotFoundPage;
