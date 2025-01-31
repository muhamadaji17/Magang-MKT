import { MdOutlineResetTv } from 'react-icons/md';
import { RxReset } from 'react-icons/rx';
import { useStore } from '../../store/store';
import { inputSettingPassword } from '../../pattern';
import { useNavigate } from 'react-router-dom';
import { HeaderAuth } from '../../components/molecules';
import { Errors } from '../../components/atoms';
import { SupportAuthTemplate } from '../../components/templates';
import { FormAuth } from '../../components/organisms';
import {
    handleShowPassword,
    handleSubmitData,
    handleShowConfirmPassword,
} from '../../pattern';
import { SettingPasswordService } from '../../services';
import { useGlobalHook } from '../../hook';

const SettingPassword = () => {
    const navigate = useNavigate();
    const { account } = useStore();
    const {
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        loading,
        setLoading,
    } = useGlobalHook();

    return (
        <SupportAuthTemplate>
            <HeaderAuth
                iconHeader={MdOutlineResetTv}
                iconTitle={RxReset}
                titleText='Reset your password'
            >
                <p>
                    please set your new password below and make sure your
                    password is secure.
                </p>
                <Errors>
                    If it is more than 5 minutes, it will be redirected to the
                    previous page.
                </Errors>
            </HeaderAuth>
            <FormAuth
                dataForm={inputSettingPassword}
                buttonName='Send'
                buttonStyle='w-24 text-white bg-blue-600 hover:bg-blue-800'
                loading={loading}
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                handleConfirmPassword={() =>
                    handleShowConfirmPassword(
                        setShowConfirmPassword,
                        showConfirmPassword
                    )
                }
                showPassword={showPassword}
                showConfirmPassword={showConfirmPassword}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        SettingPasswordService,
                        navigate,
                        reset,
                        setLoading,
                        account
                    )
                }
            />
        </SupportAuthTemplate>
    );
};

export default SettingPassword;
