import { Form } from "../../components/organisms";
import { AuthTemplate } from "../../components/templates";
import { InformText } from "../../components/atoms";
import {
    handleShowPassword,
    handleSubmitData,
    inputLogin,
} from "../../pattern";
import { LoginService } from "../../services";
import { useGlobalHooks } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";

const LoginPage = () => {
    const { showPassword, setShowPassword, loadingButton, setLoadingButton } =
        useGlobalHooks();
    const navigate = useNavigate();
    const { updateAccount } = useStore();

    return (
        <AuthTemplate
            title="Login"
            titleBg="Welcome Back!"
            descriptionBg="Let's begin"
        >
            <Form
                dataForm={inputLogin}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        LoginService,
                        navigate,
                        reset,
                        updateAccount,
                        setLoadingButton
                    )
                }
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                showPassword={showPassword}
                loading={loadingButton}
                buttonName="Login"
                buttonStyle="w-24 text-white bg-blue-600 hover:bg-blue-800"
            />
            <InformText
                text="forgot password?"
                path="/forgot-password"
                link="click here"
            />
            <InformText
                text="dont have an account?"
                path="/register"
                link="sign up"
            />
        </AuthTemplate>
    );
};

export default LoginPage;
