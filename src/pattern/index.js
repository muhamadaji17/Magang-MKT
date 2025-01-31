import { inputRegister } from './PatternAuth/register';
import { inputLogin } from './PatternAuth/login';
import { inputForgotPassword } from './PatternAuth/forgotPassword';
import { inputSettingPassword } from './PatternAuth/settingPassword';
import { inputAddDepartment } from './AddData/department';
import { departmentTablePattern } from './Table/departmentTable';
import {
    handleSubmitData,
    handleShowPassword,
    handleShowConfirmPassword,
    handleShowModal,
    handleModal,
} from './handleButton';
import { errorOptions } from './patternError';
import { employeeBreadcrumb, departmentBreadcrumb } from './breadcrumb';
import { sidebarLink } from './sidebarPattern';

export {
    errorOptions,
    handleSubmitData,
    inputRegister,
    handleShowPassword,
    inputLogin,
    inputSettingPassword,
    inputForgotPassword,
    handleShowConfirmPassword,
    employeeBreadcrumb,
    inputAddDepartment,
    departmentBreadcrumb,
    departmentTablePattern,
    sidebarLink,
    handleShowModal,
    handleModal,
};
