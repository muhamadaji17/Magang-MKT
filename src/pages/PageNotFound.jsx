/** @format */

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-gray-700 mt-4">
          Halaman yang Anda cari tidak ditemukan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
