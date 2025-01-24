import { Container, Section, FormRegister } from "../../component/index";

const Register = () => {
  return (
    <>
      <Section>
        <Container className="flex h-full">
          <div className="w-1/2 h-full justify-center items-center flex overflow-hidden">
            <img
              src="/public/images/login.svg"
              alt="login"
              className="object-cover"
            />
          </div>
          <div className="w-1/2 h-full justify-center items-center flex">
            <FormRegister />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Register;
