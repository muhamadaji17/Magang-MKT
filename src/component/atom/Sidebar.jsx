import { Link } from "react-router-dom";

const Sidebar = () => {
  const navbar = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Departement",
      path: "/departement",
    },
  ];

  return (
    <>
      <nav className="flex flex-col border-2 w-1/6 min-h-screen gap-6">
        <div className="text-start w-full">
          <h1 className="p-4 text-xl font-bold">Sidebar</h1>
        </div>
        <ul className="flex flex-col text-primary space-y-4 font-semibold">
          {navbar.map((nav, index) => (
            <div key={index}>
              <Link to={nav.path}>
                <li className=" px-4 py-1 w-full">{nav.name}</li>
              </Link>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
