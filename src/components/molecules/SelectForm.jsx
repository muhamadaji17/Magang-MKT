import { Label, Errors } from '../atoms';

const SelectForm = ({
    id,
    title,
    options,
    register,
    labelStyle,
    labelText,
    errors,
    addOptionError,
}) => {
    return (
        <div className='flex flex-col gap-1'>
            <Label htmlFor={id} className={labelStyle}>
                {labelText}
            </Label>
            <select
                id={id}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                {...(register ? register(id, addOptionError) : {})}
            >
                <option value='' disabled>
                    Choose a {title}
                </option>
                {options.map((option, i) => (
                    <option value={option.value} key={i}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && (
                <Errors className='text-sm text-red-500'>
                    {errors.message}
                </Errors>
            )}
        </div>
    );
};

export default SelectForm;
