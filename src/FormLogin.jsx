import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputForForm from "./InputForForm";
import Link from "./Link";
import axios from "axios";
import { TokenContext } from "./context/TokenContextProvider";
import Swal from "sweetalert2";
import ButtonSubmit from "./ButtonSubmit";
import { useNavigate } from "react-router";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const url_env = import.meta.env.VITE_URL_DEV + "/login";
  const { handleLogin } = useContext(TokenContext);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(url_env, values);
      const token = response.data.data.accessToken;
      sessionStorage.setItem("accessToken", token);
      handleLogin(token);
      Swal.fire({
        title: "Berhasil Login!",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops... Login Gagal!",
        text: "Login gagal silahkan coba kembali",
      });
    }
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Nama wajib diisi"),

    password: Yup.string()
      .min(5, "Password harus memiliki minimal 5 karakter")
      .required("Password wajib diisi"),
  });

  return (
    <div className="w-96 border border-slate-500 shadow-2xl bg-white p-5 rounded-md">
      <h1 className="font-semibold text-2xl text-center mb-4">Form Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <InputForForm
              type={"text"}
              id={"username"}
              name={"username"}
              placeholder={"Masukan username"}
              htmlFor={"username"}
              labelText={"Username: "}
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

            <div className="flex justify-between mt-3 mb-5">
              <Link path={"/reset-password"}>Lupa Password?</Link>
              <Link path={"/register"}>Daftar</Link>
            </div>

            <ButtonSubmit type={"submit"}>Login</ButtonSubmit>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
