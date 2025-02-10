const Input = ({ id, register, addOptionError, variant, ...props }) => {
    return (
        <input
            id={id}
            className={`${
                variant ? variant : ''
            } ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none`}
            autoComplete='off'
            {...props}
            {...(register ? register(id, addOptionError) : {})}
        />
    );
};

export default Input;
