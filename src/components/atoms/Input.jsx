export const Input = ({ id, register, addOptionError, ...props }) => {
    return (
        <input
            id={id}
            className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none'
            autoComplete='off'
            {...props}
            {...register(id, addOptionError)}
        />
    );
};
