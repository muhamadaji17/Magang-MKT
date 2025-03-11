import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Textarea from "../atoms/Textarea";

const InputForm = ({ field, register, errors, type, defaultValue }) => {
  return (
    <>
      {field.type === "textarea" ? (
        <Textarea
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          defaultValue={defaultValue}
          {...register(field.name, field.validation)}
          error={errors[field.name]}
        />
      ) : field.type === "select" ? (
        <Select
          label={field.label}
          name={field.name}
          error={errors[field.name]}
          defaultValue={defaultValue}
          {...register(field.name, field.validation.required)}
        >
          <option value="" disabled>
            {field.placeholder}
          </option>
          {field.option.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          label={field.label}
          name={field.name}
          type={type || field.type}
          placeholder={field.placeholder}
          {...register(field.name, field.validation)}
          error={errors[field.name]}
          defaultValue={field.type === "file" ? null : defaultValue}
        />
      )}
    </>
  );
};

export default InputForm;
