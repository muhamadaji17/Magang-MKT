import { inputRegister } from './PatternAuth/register';
import { inputLogin } from './PatternAuth/login';
import { inputForgotPassword } from './PatternAuth/forgotPassword';
import { inputSettingPassword } from './PatternAuth/settingPassword';
import {
    inputAddDepartment,
    inputEditDepartment,
} from './PatternDashboard/department';
import { departmentTableData } from './Table/departmentTable';
import {
    handleSubmitData,
    handleShowPassword,
    handleShowConfirmPassword,
    handleShowModal,
    handleModal,
    handleShowModalId,
    handleCancelModal,
    handleDeleteData,
    handleSubmitDataId,
} from './handleButton';
import { errorOptions } from './patternError';
import {
    employeeBreadcrumb,
    departmentBreadcrumb,
    unitBreadcrumb,
} from './breadcrumb';
import { sidebarLink } from './sidebarPattern';
import { unitTableData } from './Table/unitTable';
import { inputAddUnit, inputEditUnit } from './PatternDashboard/unit';

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
    sidebarLink,
    handleShowModal,
    handleModal,
    departmentTableData,
    inputEditDepartment,
    handleShowModalId,
    handleCancelModal,
    handleDeleteData,
    handleSubmitDataId,
    unitTableData,
    inputAddUnit,
    inputEditUnit,
    unitBreadcrumb,
};
