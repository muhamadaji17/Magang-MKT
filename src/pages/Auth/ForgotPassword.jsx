import { GiDialPadlock } from 'react-icons/gi';
import { useStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/organisms';
import { inputForgotPassword, handleSubmitData } from '../../pattern';
import { HeaderAuth } from '../../components/molecules';
import { ForgotPasswordService } from '../../services';
import { SupportAuthTemplate } from '../../components/templates';
import { useGlobalHook } from '../../hook';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { updatePhoneNumber } = useStore();
    const { loadingButton, setLoadingButton } = useGlobalHook();

    return (
        <SupportAuthTemplate>
            <HeaderAuth iconHeader={GiDialPadlock} titleText='Forgot Password?'>
                Please enter the phone number associated with your account
            </HeaderAuth>
            <Form
                dataForm={inputForgotPassword}
                buttonName='Send'
                buttonStyle='w-24 text-white bg-blue-600 hover:bg-blue-800'
                loading={loadingButton}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        ForgotPasswordService,
                        updatePhoneNumber,
                        navigate,
                        reset,
                        setLoadingButton
                    )
                }
            />
        </SupportAuthTemplate>
    );
};

export default ForgotPassword;
