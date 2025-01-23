import { FormAuth } from '/src/components/organisms';
import { AuthTemplate } from '/src/components/templates';
import { LinkAuth } from '/src/components/atoms';
import { handleShowPassword, handleSubmitData, inputLogin } from '/src/pattern';
import { LoginService } from '/src/services/AuthService';
import { useGlobalHook } from '/src/hook';
import { useNavigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const LoginPage = () => {
    const { showPassword, setShowPassword } = useGlobalHook();
    const navigate = useNavigate();
    const { setAccessToken } = useStore();

    return (
        <AuthTemplate
            title='Login'
            titleBg='Welcome Back!'
            descriptionBg="Let's begin"
        >
            <FormAuth
                dataForm={inputLogin}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        LoginService,
                        navigate,
                        reset,
                        setAccessToken
                    )
                }
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                showPassword={showPassword}
                buttonName='Login'
                buttonWidth='w-24'
            />
            <LinkAuth
                text='dont have an account?'
                path='/register'
                link='sign up'
            />
        </AuthTemplate>
    );
};
