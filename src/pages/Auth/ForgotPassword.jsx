import { GiDialPadlock } from 'react-icons/gi';
import { useStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { FormAuth } from '../../components/organisms';
import { inputForgotPassword, handleSubmitData } from '../../pattern';
import { HeaderAuth } from '../../components/molecules';
import { ForgotPasswordService } from '../../services';
import { SupportAuthTemplate } from '../../components/templates';
import { useGlobalHook } from '../../hook';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { updateAccount } = useStore();
    const { loading, setLoading } = useGlobalHook();

    return (
        <SupportAuthTemplate>
            <HeaderAuth iconHeader={GiDialPadlock} titleText='Forgot Password?'>
                Please enter the phone number associated with your account
            </HeaderAuth>
            <FormAuth
                dataForm={inputForgotPassword}
                buttonName='Send'
                buttonWidth='w-full'
                loading={loading}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        ForgotPasswordService,
                        updateAccount,
                        navigate,
                        reset,
                        setLoading
                    )
                }
            />
        </SupportAuthTemplate>
    );
};

export default ForgotPassword;
