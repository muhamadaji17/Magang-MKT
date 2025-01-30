const Sidebar = () => {
  return (
    <>
      <nav className="flex flex-col border-2 w-1/6 h-screen items-center">
        <div className="text-center w-full">
          <h1 className="p-4 text-xl font-bold">Brand</h1>
        </div>
        <ul className="flex flex-col text-primary">
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
