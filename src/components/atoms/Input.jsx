import { TextError } from "..";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const Input = ({
  name,
  register,
  error,
  placeholder,
  type,
  label,
  className,
  ...props
}) => {
  console.log("Ini props", props);
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      {type === "file" ? (
        <div className="relative flex items-center justify-center w-full h-40 bg-green-500 rounded-md">
          <img
            src="../../../public/stillhere.jpg"
            className="absolute object-cover w-full h-full rounded-md"
          />
          <MdOutlineDriveFolderUpload size={40} className="absolute" />
          <input
            name={name}
            id={name}
            type={type}
            placeholder={placeholder}
            className={`p-2 border-2 w-full opacity-0 h-full ${className} z-20`}
            {...props}
          />
        </div>
      ) : (
        <input
          name={name}
          id={name}
          type={type || "text"}
          placeholder={placeholder}
          className={`p-2 border-2 rounded-md ${className}`}
          {...props}
        />
      )}
      {error && <TextError>{error.message}</TextError>}
    </div>
  );
};

export default Input;
