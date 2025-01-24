import { MdOutlineResetTv } from 'react-icons/md';
import { RxReset } from 'react-icons/rx';
import { useStore } from '/src/store/store';
import { inputSettingPassword } from '/src/pattern';
import { useNavigate } from 'react-router-dom';
import { Header } from '/src/components/molecules/Header';
import { Errors } from '/src/components/atoms';
import { SupportAuthTemplate } from '/src/components/templates';
import { FormAuth } from '/src/components/organisms';
import {
    handleShowPassword,
    handleSubmitData,
    handleShowConfirmPassword,
} from '/src/pattern/handleButton';
import { SettingPasswordService } from '/src/services';
import { useGlobalHook } from '/src/hook/useGlobalHook';

export const SettingPassword = () => {
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
            <Header
                iconHeader={MdOutlineResetTv}
                iconTitle={RxReset}
                titleText='Reset your password'
            >
                <p>
                    please Set your new password below and don&apos;t make sure
                    your password is secure.
                </p>
                <Errors>
                    If it is more than 5 minutes, it will be redirected to the
                    previous page.
                </Errors>
            </Header>
            <FormAuth
                dataForm={inputSettingPassword}
                buttonName='Send'
                buttonWidth='w-full'
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
