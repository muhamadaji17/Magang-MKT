import { Button, Container } from "@/components";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <Container className="w-full h-[500px] flex justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-bold">URL Not Found</h1>
          <Link to="/">
            <Button className="text-white hover:bg-blue-600">
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Notfound;
