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
    handleChange,
} from './handleButton';
import { errorOptions } from './patternError';
import { sidebarLink } from './sidebarPattern';
import { unitTableData } from './Table/unitTable';
import { PositionTableData } from './Table/PositionTable';
import { inputAddUnit, inputEditUnit } from './PatternDashboard/unit';
import {
    inputAddPosition,
    inputEditPosition,
} from './PatternDashboard/position';

export {
    errorOptions,
    handleSubmitData,
    inputRegister,
    handleShowPassword,
    inputLogin,
    inputSettingPassword,
    inputForgotPassword,
    handleShowConfirmPassword,
    inputAddDepartment,
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
    PositionTableData,
    inputAddPosition,
    inputEditPosition,
    handleChange,
};
