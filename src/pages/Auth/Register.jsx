import { FormAuth } from '/src/components/organisms';
import { AuthTemplate } from '/src/components/templates';
import { LinkAuth } from '/src/components/atoms';
import {
    handleShowPassword,
    handleSubmitData,
    inputRegister,
} from '/src/pattern';
import { RegisterService } from '/src/services/AuthService';
import { useGlobalHook } from '/src/hook';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const { showPassword, setShowPassword } = useGlobalHook();
    const navigate = useNavigate();

    return (
        <AuthTemplate
            title='Register'
            titleBg='Welcome!'
            descriptionBg="Let's get started"
        >
            <FormAuth
                dataForm={inputRegister}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(data, RegisterService, navigate, reset)
                }
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                showPassword={showPassword}
                buttonName='Register'
                buttonWidth='w-24'
            />
            <LinkAuth text='Have an account?' path='/login' link='sign in' />
        </AuthTemplate>
    );
};
