import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputForForm from "./InputForForm";
import ButtonSubmit from "./ButtonSubmit";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const FormResetPassword = ({ phoneNumber }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const url_env = import.meta.env.VITE_URL_DEV + "/set-pass";
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    otp: Yup.string()
      .matches(
        /^(?:\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\s.-]{5,16}$/,
        "Kode OTP tidak valid"
      )
      .required("Kode OTP wajib diisi"),
    password: Yup.string()
      .min(5, "Password harus memiliki minimal 5 karakter")
      .required("Password wajib diisi"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password tidak cocok")
      .required("Konfirmasi password diperlukan"),
  });

  const handleSubmit = async (values) => {
    const body = {
      otp: values.otp,
      password: values.password,
      phone_number: phoneNumber,
    };

    try {
      const response = await axios.post(url_env, body);
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Password berhasil diubah!",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-96 border border-slate-500 shadow-2xl bg-white p-5 rounded-md">
      <h1 className="font-semibold text-2xl text-center mb-4">
        Reset Password
      </h1>
      <Formik
        initialValues={{ otp: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <InputForForm
              type={"tel"}
              id={"otp"}
              name={"otp"}
              placeholder={"Masukan kode OTP"}
              htmlFor={"otp"}
              labelText={"Code OTP: "}
            />

            <InputForForm
              type={showPassword ? "text" : "password"}
              id={"password"}
              name={"password"}
              placeholder={"Masukan password"}
              htmlFor={"password"}
              labelText={"Password: "}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            <InputForForm
              type={showConfirmPassword ? "text" : "password"}
              id={"confirmPassword"}
              name={"confirmPassword"}
              placeholder={"Masukan Confirm password"}
              htmlFor={"confirmPassword"}
              labelText={"Confirm Password: "}
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
            />

            <ButtonSubmit type={"submit"}>Login</ButtonSubmit>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormResetPassword;
