import { Container, Section } from "@/components";
import useLogin from "@/store/useLogin";
import { useNavigate } from "react-router-dom";
import { loginPattern } from "@/pattern/auth/AuthPattern";
import useFormSubmit from "@/hooks/auth/useFormSubmit";
import FormTemplate from "@/components/organism/FormTemplate";

const Login = () => {
  const { login } = useLogin();
  const navigate = useNavigate();

  const { handleFormSubmit } = useFormSubmit();

  return (
    <>
      <Section className="h-screen">
        <Container className="h-full flex items-center justify-around pt-0">
          <div className="w-1/2 hidden h-full md:flex justify-center items-center">
            <img src="../public/login.png" alt="login" className="h-96" />
          </div>
          <div className="w-full md:w-1/2 h-full flex justify-center items-center">
            <FormTemplate
              buttonSubmitClassName={"w-full"}
              title={"Login"}
              description={"Login to your account"}
              onSubmit={(data) => handleFormSubmit(data, login, navigate)}
              pattern={loginPattern}
              className="w-1/2 bg-white"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Login;
