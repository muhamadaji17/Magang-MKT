import { inputRegister } from './PatternAuth/register';
import { inputLogin } from './PatternAuth/login';
import { inputForgotPassword } from './PatternAuth/forgot-password';
import { inputSettingPassword } from './PatternAuth/setting-password';
import {
    handleSubmitData,
    handleShowPassword,
    handleShowConfirmPassword,
} from './handleButton';
import { errorOptions } from './PatternError';
import { DashboardBreadcrumb, EmployeeBreadcrumb } from './Breadcrumb';

export {
    errorOptions,
    handleSubmitData,
    inputRegister,
    handleShowPassword,
    inputLogin,
    inputSettingPassword,
    inputForgotPassword,
    handleShowConfirmPassword,
    DashboardBreadcrumb,
    EmployeeBreadcrumb,
};
