import Input from "../atom/Input";

const ShowPassword = () => {
  return (
    <>
      <label
        htmlFor="show-password"
        className="flex items-center gap-2 cursor-pointer"
      >
        <Input type="checkbox" id="show-password" /> Show Password
      </label>
    </>
  );
};

export default ShowPassword;
