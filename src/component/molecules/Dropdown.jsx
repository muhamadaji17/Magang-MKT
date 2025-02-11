import { Link } from "react-router";

const Dropdown = ({ dataList }) => {
  return (
    <div
      id="dropdownHover"
      className={`z-10 hidden group-hover:block py-2 text-sm text-gray-700 shadow-[4px_4px_4px_4px_rgba(0,0,0,0.2)] rounded-md absolute top-14  bg-white w-40`}
    >
      <ul className="" aria-labelledby="dropdownHoverButton">
        {dataList.map((data) => (
          <li key={data.text}>
            <Link
              to={data.destinationPath}
              onClick={data.onClick}
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white "
            >
              {data.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
