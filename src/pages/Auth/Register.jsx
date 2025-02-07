import { Form } from '../../components/organisms';
import { AuthTemplate } from '../../components/templates';
import { LinkAuth } from '../../components/atoms';
import {
    handleShowPassword,
    handleSubmitData,
    inputRegister,
} from '../../pattern';
import { RegisterService } from '../../services';
import { useGlobalHook } from '../../hook';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { showPassword, setShowPassword, loadingButton, setLoadingButton } =
        useGlobalHook();
    const navigate = useNavigate();

    return (
        <AuthTemplate
            title='Register'
            titleBg='Welcome!'
            descriptionBg="Let's get started"
        >
            <Form
                dataForm={inputRegister}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        RegisterService,
                        navigate,
                        reset,
                        setLoadingButton
                    )
                }
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                showPassword={showPassword}
                buttonName='Register'
                loading={loadingButton}
                buttonStyle='w-24 text-white bg-blue-600 hover:bg-blue-800'
            />
            <LinkAuth text='Have an account?' path='/login' link='sign in' />
        </AuthTemplate>
    );
};

export default Register;
