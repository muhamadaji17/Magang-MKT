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
  phone: { required: "Phone Number is Required" },
  dob: { required: "Birthdate is Required" },
  gender: { required: "Gender is Required" },

  shift_name: { required: "Nama Shift is Required" },
  jam_masuk: { required: "Jam Masuk is Required" },
  jam_keluar: { required: "Jam Keluar is Required" },
  username: { required: "Username is Required" },

  password: {
    required: "Password is Required",
    // minLength: {
    //   value: 8,
    //   message: "Password mengandung minimal 8 karakter",
    // },
    // pattern: {
    //   value:
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_`])\S{8,}$/,
    //   message:
    //     " setiap karakter harus berupa huruf kecil, huruf kapital, angka, dan simbol",
    //   // "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    // },
  },
  confirmPassword: {
    required: "Confirm Password is Required",
    // minLength: {
    //   value: 5,
    //   message: "Password must be at least 8 characters long",
    // },
    // pattern: {
    //   value:
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_`])\S{8,}$/,
    //   message:
    //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    // },
  },
};
