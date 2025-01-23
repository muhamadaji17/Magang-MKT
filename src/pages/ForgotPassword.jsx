import { GiDialPadlock } from 'react-icons/gi';
import { useStore } from '/src/store/store';
import { useNavigate } from 'react-router-dom';
import { FormAuth } from '../components/organisms/FormAuth';
import { InputForgotPassword } from '../pattern/PatternAuth/forgot-password';
import { HeaderAuth } from '../components/molecules/HeaderAuth';
import { handleSubmitData } from '../pattern/handleButton';
import { ForgotPasswordService } from '../services/AuthService';
import { SupportAuthTemplate } from '../components/templates/SupportAuthTemplate';

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const { setPhoneNumber } = useStore();

    return (
        <SupportAuthTemplate>
            <HeaderAuth iconHeader={GiDialPadlock} titleText='Forgot Password?'>
                Please enter the phone number associated with your account
            </HeaderAuth>
            <FormAuth
                dataForm={InputForgotPassword}
                buttonName='Send'
                buttonWidth='w-full'
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        ForgotPasswordService,
                        setPhoneNumber,
                        navigate,
                        reset
                    )
                }
            />
        </SupportAuthTemplate>
    );
};
