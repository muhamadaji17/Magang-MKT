import { Link } from "react-router-dom";
import { Button, Section } from "../component";

const NotFound = () => {
  return (
    <>
      <Section>
        <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
          <h1 className="text-3xl font-bold">404 Not Found</h1>
          <Link to={"/"}>
            <Button className="px-4 py-2 bg-primary text-white rounded-md">
              Back To Home
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
