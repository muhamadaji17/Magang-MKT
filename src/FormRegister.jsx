import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputForForm from "./InputForForm";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import ButtonSubmit from "./ButtonSubmit";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "Nama terlalu pendek!")
      .max(50, "Nama terlalu panjang!")
      .required("Nama wajib diisi"),
    email: Yup.string()
      .required("Email wajib diisi")
      .email("Email tidak valid"),
    password: Yup.string()
      .min(6, "Password harus memiliki minimal 6 karakter")
      .required("Password wajib diisi"),
    phone_number: Yup.string()
      .matches(
        /^(?:\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\s.-]{5,16}$/,
        "Nomor telepon tidak valid"
      )
      .required("Nomor telepon wajib diisi"),
  });

  const url_env = import.meta.env.VITE_URL_DEV + "/register";
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(url_env, values);
      if (response.data.status) {
        Swal.fire({
          title: "Berhasil Mendaftar!",
          icon: "success",
        });

        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal mendaftar!",
          text: response.data.message,
        });
      }

      console.log(response);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops... Gagal!",
        text: "Silahkan coba kembali",
      });

      console.log(error);
    }
  };

  return (
    <div className="w-96 border border-slate-500 shadow-2xl bg-white px-6 py-12 rounded-md">
      <h1 className="font-semibold text-2xl text-center mb-4">Form Daftar</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          phone_number: "",
        }}
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
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"Masukan email"}
              htmlFor={"email"}
              labelText={"Email: "}
            />

            <InputForForm
              type={"password"}
              id={"password"}
              name={"password"}
              placeholder={"Masukan password"}
              htmlFor={"password"}
              labelText={"Password: "}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            <InputForForm
              type={"tel"}
              id={"phone_number"}
              name={"phone_number"}
              placeholder={"Masukan nomor telepon"}
              htmlFor={"phone"}
              labelText={"No Telpon: "}
            />

            <ButtonSubmit type="submit">Daftar</ButtonSubmit>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRegister;
