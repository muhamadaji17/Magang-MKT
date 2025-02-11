import { inputLogin } from "./PatternAuth/Login";
import { inputRegister } from "./PatternAuth/Register";
import { inputOtp } from "./PatternAuth/Otp";
import { inputResetPassword } from "./PatternAuth/ResetPassword";
import { errorOptions } from "./PatternError";
import { handleShowPassword } from "./HandleButton";
import { handleSubmitData } from "./HandleButton";
import {
  tableColumnDepartement,
  tableColumnUnit,
  tableColumnPosition,
} from "./PatternTable/tableDataColumn";
import { navLinkSidebar } from "./LinkPattern";
import { disabledButtonIfNoChange } from "./disabledButtonIfNoChange";
import { handleSearch } from "./HandleSearch";
import { dropdownPattern } from "./DropdownPattern";
import { handleShowModal } from "./HandleButton";
import {
  inputAddDepartement,
  inputEditDepartement,
} from "./PatternInputModal/Departement";
import { inputAddUnit, inputEditUnit } from "./PatternInputModal/Unit";
import {
  inputAddPosition,
  inputEditPosition,
} from "./PatternInputModal/Position";

export {
  inputLogin,
  inputRegister,
  inputOtp,
  inputResetPassword,
  inputAddDepartement,
  inputEditDepartement,
  inputAddUnit,
  inputEditUnit,
  inputAddPosition,
  inputEditPosition,
  errorOptions,
  navLinkSidebar,
  handleShowPassword,
  handleSubmitData,
  handleSearch,
  handleShowModal,
  dropdownPattern,
  tableColumnDepartement,
  tableColumnUnit,
  tableColumnPosition,
  disabledButtonIfNoChange,
};
