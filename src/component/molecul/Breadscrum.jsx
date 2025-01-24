/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadscrum = ({ pathObjects }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className="md:-ml-4 -ml-3 mb-2 mt-11 relative dark:text-white"
    >
      {pathObjects.length < 3 ? (
        <div className="flex items-center">
          <FaHome fontSize="small" className="mr-1 text-lg" />
          <Link color="inherit" href="/dashboard">
            Home
          </Link>
        </div>
      ) : null}

      {(pathObjects || []).map((mn, index) => (
        <div key={index} className="flex flex-wrap">
          {/* {console.log(pathArray[1])} */}
          <Link color="inherit" href={`/${mn.path}`} className="">
            <p className="hover:underline capitalize">
              {mn.route.replace("-", " ")}
            </p>
            {/* <p className="hover:underline capitalize">{mn.route}</p> */}
          </Link>
        </div>
      ))}
    </Breadcrumbs>
  );
};

export default Breadscrum;
