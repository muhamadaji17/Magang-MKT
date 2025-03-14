import { Container, Section } from "@/components";
import { loginPattern } from "@/pattern/auth/AuthPattern";
import FormTemplate from "@/components/organism/FormTemplate";
import { serviceLogin } from "@/services/auth/authService";
import useLogin from "@/store/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const loginSubmit = async (data) => {
    await serviceLogin(data, login);
    navigate("/");
  };
  return (
    <>
      <Section className="h-screen">
        <Container className="h-full flex items-center justify-around pt-0">
          <div className="flex-1 hidden h-full md:flex justify-center items-center">
            <img src="../public/login.png" alt="login" className="h-96" />
          </div>
          <div className="w-full flex-1 h-full flex justify-center items-center">
            <FormTemplate
              buttonSubmitClassName={"w-full"}
              title={"Login"}
              description={"Login to your account"}
              onSubmit={loginSubmit}
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
