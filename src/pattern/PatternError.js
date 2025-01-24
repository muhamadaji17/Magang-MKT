export const errorOptions = {
  nama_karyawan: { required: "Nama Karyawan is Required" },
  name_type: { required: "Nama Tipe is Required" },
  berangkat: { required: "Tanggal Berangkat is Required" },
  kembali: { required: "Tanggal Kembali is Required" },
  transport: { required: "Pengajuan Transport is Required" },
  penginapan: { required: "Pengajuan Penginapan is Required" },
  alasan: { required: "Tujuan Dinas is Required" },
  tujuan: { required: "Kota Tujuan is Required" },
  description: { required: "Description is Required" },
  cuti_cut: { required: "Cuti Cut is Required" },
  payroll_cut: { required: "Payroll Cut is Required" },
  reason: { required: "Reason is Required" },
  nip: { required: "NIP is Required" },
  workdate: { required: "Tanggal Masuk is Required" },
  place_of_birth: { required: "Tempat Lahir is Required" },
  fullname: { required: "Fullname is Required" },
  email: { required: "E-Mail is Required" },
  phone_number: { required: "Phone Number is Required" },
  dob: { required: "Birthdate is Required" },
  gender: { required: "Gender is Required" },

  shift_name: { required: "Nama Shift is Required" },
  jam_masuk: { required: "Jam Masuk is Required" },
  jam_keluar: { required: "Jam Keluar is Required" },
  username: { required: "Username is Required" },

  password: {
    required: "Password is Required",
  },
  user_password_new: {
    required: "Password number Wajib diisi",
    minLength: {
      value: 8,
      message: "Password minimal 8 karakter",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_`])\S{8,}$/,
      message: "  Harus ada huruf kecil, huruf kapital, angka, dan simbol",
    },
  },
  user_password_new_confirm: {
    required: "Confirm Password number Wajib diisi",
  },
};
