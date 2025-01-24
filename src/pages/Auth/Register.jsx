import { FormAuth } from '../../components/organisms';
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
    const { showPassword, setShowPassword, loading, setLoading } =
        useGlobalHook();
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
                    handleSubmitData(
                        data,
                        RegisterService,
                        navigate,
                        reset,
                        setLoading
                    )
                }
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                showPassword={showPassword}
                buttonName='Register'
                loading={loading}
                buttonWidth='w-24'
            />
            <LinkAuth text='Have an account?' path='/login' link='sign in' />
        </AuthTemplate>
    );
};

export default Register;
