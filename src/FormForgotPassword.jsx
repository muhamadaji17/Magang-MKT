import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputForForm from "./InputForForm";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonSubmit from "./ButtonSubmit";

const FormForgotPassword = ({ setCodeOtp, setPhoneNumber }) => {
  const validationSchema = Yup.object({
    phone_number: Yup.string()
      .matches(
        /^(?:\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\s.-]{5,16}$/,
        "Nomor telepon tidak valid"
      )
      .required("Nomor telepon wajib diisi"),
  });
  const url_env = import.meta.env.VITE_URL_DEV + "/forgot-password";
  const handleSubmit = async (values) => {
    const body = { phone_number: values.phone_number };
    try {
      const response = await axios.post(url_env, body);
      console.log(response);
      if (response.data.status) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: response.data.message + " Masa berlaku kode OTP 5 menit",
        });

        setCodeOtp(response.data.payload.otp);
        setPhoneNumber(values.phone_number);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops... Nomor telepon tidak di temukan!",
          text: "Nomor yang anda masukan tidak terdaftar, silahkan masukan nomor telepon yang benar!",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Gagal mengirim OTP",
        text: "Gagal mengirip kode OTP silahkan coba lagi",
      });
    }
  };

  return (
    <div className="w-96 border border-slate-500 shadow-2xl bg-white p-5 rounded-md">
      <h1 className="font-semibold text-2xl text-center mb-4">Lupa Password</h1>
      <Formik
        initialValues={{ phone_number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <InputForForm
              type={"tel"}
              id={"phone_number"}
              name={"phone_number"}
              placeholder={"Masukan nomor telepon"}
              htmlFor={"phone"}
              labelText={"No Telpon: "}
            />

            <ButtonSubmit type={"submit"}>{"Kirim Kode OTP"}</ButtonSubmit>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormForgotPassword;
