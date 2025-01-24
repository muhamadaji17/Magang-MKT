import { GiDialPadlock } from 'react-icons/gi';
import { useStore } from '/src/store/store';
import { useNavigate } from 'react-router-dom';
import { FormAuth } from '/src/components/organisms';
import { inputForgotPassword } from '/src/pattern';
import { Header } from '/src/components/molecules/Header';
import { handleSubmitData } from '/src/pattern/handleButton';
import { ForgotPasswordService } from '/src/services';
import { SupportAuthTemplate } from '/src/components/templates';
import { useGlobalHook } from '../../hook';

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const { updateAccount } = useStore();
    const { loading, setLoading } = useGlobalHook();

    return (
        <SupportAuthTemplate>
            <Header iconHeader={GiDialPadlock} titleText='Forgot Password?'>
                Please enter the phone number associated with your account
            </Header>
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
