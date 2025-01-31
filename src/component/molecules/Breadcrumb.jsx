import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="flex text-sm text-gray-600">
      <ol className="flex space-x-3">
        <li>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Home
          </a>
        </li>
        <li className="text-gray-400"> / </li>
        <li>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Dashboard
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
