import {
  Button,
  Form,
  FormTitle,
  Input,
  Section,
  Modal,
  SearchTable,
  Sidebar,
  Table,
  TextError,
} from "../component";

import useAuthStore from "../store/useAuthStore";

const Home = () => {
  const { logout, username } = useAuthStore();

  return (
    <>
      <Section className="flex">
        <Sidebar />
        <div className="w-5/6 h-screen flex flex-col">
          <div className="w-full p-2 px-8 flex justify-between items-center  text-primary border-b-2">
            <h1>{username}</h1>
            <Button
              onClick={logout}
              className="px-4 py-2 bg-primary text-white rounded-md text-sm"
            >
              Logout
            </Button>
          </div>

          <div className="w-full px-8 py-2">
            <div className="w-full h-full">
              <Table />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
