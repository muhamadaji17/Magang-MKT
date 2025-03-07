/* eslint-disable react/prop-types */
import { FaCheck, FaEyeSlash } from "react-icons/fa";
import { MoleculsAutocomplete } from "../molecul";
import { Button, Input } from "../atom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { errorOptions } from "../../pattern";

export const FormInputan = ({
  dataForm,

  handleSubmitData,
  handleClose,
  namaButton1,
  namaButton2,

  showPassword,
  handleClick,
  loadingButton,
  LinkOptional,
  namaLink,
  actionAccountName,
  linkQuestAccount,
  questAccount,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("user_password_new");

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-12 md:gap-5 gap-0 mt-5">
        {dataForm?.map((data, index) => (
          <div
            key={index}
            className={`${
              data.grid === 4
                ? `md:col-span-4 col-span-12`
                : data.grid === 6
                ? "md:col-span-6 col-span-12"
                : data.grid === 3
                ? " md:col-span-3 col-span-12"
                : data.grid === 12
                ? " col-span-12"
                : "col-span-12"
            } `}
            // className="col-span-3"
          >
            {data.jenisInput === "autocomplete" ? (
              <div>
                <MoleculsAutocomplete
                  name={data.name}
                  label={data.label}
                  options={data.valueOptions}
                  control={control}
                  defaultValue={data.defaultValue}
                />
              </div>
            ) : data.jenisInput === "hidden" ? (
              <div key={index}>
                <input
                  type="hidden"
                  name={data.name}
                  value={data.value}
                  {...register(data.name)}
                />
              </div>
            ) : data.jenisInput === "input" ? (
              <div className="relative">
                {/* {data.labelFoto && (
                  <Label className="mb-3">{data.labelFoto}</Label>
                )} */}
                <Input
                  className={
                    data.type === "file"
                      ? "border-none outline-none"
                      : `${data.className} `
                  }
                  key={index}
                  placeholder={data.placeholder}
                  name={data.name}
                  onFocus={data.onFocus}
                  readOnly={data.readOnly}
                  type={!showPassword ? data.type : "text"}
                  register={register}
                  accept={data.accept}
                  label={data.label}
                  title={data.title}
                  value={data.value}
                  disabled={data.disabled}
                  min={data.min}
                  onChange={data.onChange}
                  // onChange={data.onChange == "chnageImage" ? handleFoto : null}
                  defaultValue={data.defaultValue}
                  // addOptionError={data.addOptionError}
                  addOptionError={
                    data.name === "user_password_new_confirm"
                      ? {
                          ...errorOptions.user_password_new_confirm,
                          validate: (value) =>
                            value === password || "Kata sandi tidak sama",
                        }
                      : data.addOptionError
                  }
                />
                {data.icon ? (
                  <div className="absolute right-4 top-5" onClick={handleClick}>
                    {showPassword ? (
                      <FaEyeSlash fontSize={18} />
                    ) : !showPassword ? (
                      <data.icon fontSize={18} />
                    ) : null}
                  </div>
                ) : null}

                {/* {console.log(errors)} */}
                {errors?.[data.error] && (
                  <small className="text-red-500">
                    {errors[data.error].message}
                  </small>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {LinkOptional && (
        <div className="">
          <Link
            to={`${LinkOptional ? LinkOptional : "#"}`}
            className="hover:underline hover:text-blue-600 text-blue-500 underline text-sm"
          >
            {namaLink}
          </Link>
        </div>
      )}
      <div>
        {handleClose ? (
          <div className={`grid grid-cols-2 gap-5`}>
            <Button
              className={`bg-[#004487] ${
                namaButton1 === "cek" && "bg-white text-black"
              } w-full text-white mt-5`}
              // className="bg-[#004487] w-full text-white mt-5"
              type="submit"
              onClick={handleSubmit(handleSubmitData)}
            >
              {namaButton1 === "cek" ? <FaCheck /> : namaButton1}
            </Button>
            <Button
              className="bg-danger w-full text-white mt-5"
              type="button"
              onClick={handleClose}
            >
              {namaButton2}
            </Button>
          </div>
        ) : namaButton1 ? (
          <Button
            className="bg-[#004487] w-full text-white mt-5"
            type="submit"
            onClick={handleSubmit(handleSubmitData)}
            // disabled={!loadingButton && true}
            disabled={loadingButton ? true : false}
          >
            {/* {namaButton1} */}
            {loadingButton ? (
              <div className="custom-loader flex items-center justify-center mx-auto"></div>
            ) : (
              namaButton1
            )}
          </Button>
        ) : null}
        {actionAccountName && (
          <div className="justify-center flex mt-4">
            <p className="mr-2">{questAccount} </p>
            <Link
              to={linkQuestAccount}
              className="text-[#d1b18e] hover:underline"
            >
              {actionAccountName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
